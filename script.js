window.LANGUAGE_PACKS = window.LANGUAGE_PACKS || {};


if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('sw.js')
        .then(function(reg){

            console.log(
                'Service Worker registered:',
                reg.scope
            );

        })
        .catch(function(err){

            console.log(
                'Service Worker registration failed:',
                err
            );

        });

}

const cardsGrid =
    document.getElementById('cardsGrid');

const emergencyModal =
    document.getElementById('emergencyModal');

const treatmentModal =
    document.getElementById('treatmentModal');

const infoModal =
    document.getElementById('infoModal');

const lightShowModal =
    document.getElementById('lightShowModal');

const languageModal =
    document.getElementById('languageModal');

const menuModal =
    document.getElementById('menuModal');

const infoTitle =
    document.getElementById('infoTitle');

const infoSubtitle =
    document.getElementById('infoSubtitle');

const infoList =
    document.getElementById('infoList');

const treatmentResults =
    document.getElementById('treatmentResults');

const treatmentSearch =
    document.getElementById('treatmentSearch');

const treatmentEmpty =
    document.getElementById('treatmentEmpty');

const lightShowImage =
    document.getElementById('lightShowImage');

const logo =
    document.getElementById('logo');

window.currentLanguage = 'kea';

let currentAudio = null;

let currentGallery = [];

let currentGalleryIndex = 0;

let currentLightshowId = 'recovery';

let fontLarge = false;

initializeApp();

loadLanguage();

function loadLanguage(){

    const savedLanguage =
        localStorage.getItem('language') || 'kea';

    window.currentLanguage = savedLanguage;

    applyLanguage(savedLanguage);

}

function applyLanguage(language){

    const pack =
        LANGUAGE_PACKS[language];

    if(!pack) return;

    window.currentLanguage = language;

    localStorage.setItem(
        'language',
        language
    );

    if(typeof getCards === 'function'){

        window.CARDS =
            getCards();

        renderCards();

    }

    const heroTitle =
        document.querySelector('.hero h1');

    const heroText =
        document.querySelector('.hero p');

    const footerLabels =
        document.querySelectorAll('.footer-label');

    if(heroTitle){

        heroTitle.textContent =
            pack.heroTitle;

    }

    if(heroText){

        heroText.textContent =
            pack.heroText;

    }

    if(footerLabels[0]){

        footerLabels[0].textContent =
            pack.language;

    }

    if(footerLabels[1]){

        footerLabels[1].textContent =
            pack.theme;

    }

    if(footerLabels[2]){

        footerLabels[2].textContent =
            pack.textSize;

    }

    if(footerLabels[3]){

        footerLabels[3].textContent =
            pack.more;

    }

    translateStaticContent(pack);

    renderTreatmentProviders(
        treatmentSearch
            ? treatmentSearch.value
            : ''
    );

}



function translateStaticContent(pack){

    document
        .querySelectorAll('[data-i18n]')
        .forEach(function(element){

            const key =
                element.dataset.i18n;

            if(pack[key] !== undefined){

                element.innerHTML =
                    pack[key];

            }

        });

    document
        .querySelectorAll('[data-i18n-placeholder]')
        .forEach(function(element){

            const key =
                element.dataset.i18nPlaceholder;

            if(pack[key] !== undefined){

                element.setAttribute(
                    'placeholder',
                    pack[key]
                );

            }

        });

    document
        .querySelectorAll('[data-i18n-aria-label]')
        .forEach(function(element){

            const key =
                element.dataset.i18nAriaLabel;

            if(pack[key] !== undefined){

                element.setAttribute(
                    'aria-label',
                    pack[key]
                );

            }

        });

}

function initializeApp(){

    loadTheme();

    renderCards();

    renderTreatmentProviders();

    bindCoreEvents();

    bindModalEvents();

    bindSearch();

    bindAudioIcons();

}

function loadTheme(){

    const savedTheme =
        localStorage.getItem('theme');

    if(savedTheme === 'light'){

        document.body.classList.add('light-mode');

        logo.src =
            'pori-no-bg-dark.png';

    }

}

function renderCards(){

    if(!cardsGrid) return;

    cardsGrid.innerHTML =
        window.CARDS.map(function(card){

            return `
                <button
                    class="card"
                    data-card-id="${card.id}"
                    data-card-type="${card.type}"
                    ${card.infoId ? `data-info-id="${card.infoId}"` : ''}
                >

                    <div class="card-top">

                        <div class="icon">${card.icon}</div>

                        <div class="arrow">
                            ›
                        </div>

                    </div>

                    <div class="card-content">

                        <h2>
                            ${card.title}
                        </h2>

                        <p>

                            ${card.description}

                            <span
                                class="audio-icon"
                                data-audio-id="${card.audioId}"
                            >
                                <i class="fa-solid fa-volume-high"></i>
                            </span>

                        </p>

                    </div>

                </button>
            `;

        }).join('');

    bindAudioIcons();

}

function renderTreatmentProviders(
    searchValue = ''
){

    if(!treatmentResults) return;

    const normalized =
        searchValue
            .toLowerCase()
            .trim();

    const providers =
        window.TREATMENT_PROVIDERS.filter(function(provider){

            const haystack = `
                ${provider.name}
                ${provider.meta}
                ${provider.phones.map(function(phone){
                    return phone.label;
                }).join(' ')}
            `
            .toLowerCase();

            return haystack.includes(normalized);

        });

    treatmentResults.innerHTML =
        providers.map(function(provider){

            return `
                <div class="treatment-card">

                    <h2>
                        ${provider.name}
                    </h2>

                    <div class="treatment-meta">
                        ${provider.meta}
                    </div>

                    <div class="treatment-actions">

                        ${provider.phones.map(function(phone){

                            return `
                                <a
                                    href="tel:${phone.number}"
                                    class="treatment-btn ${phone.danger ? 'treatment-btn-danger' : ''}"
                                >
                                    📞 ${phone.label}
                                </a>
                            `;

                        }).join('')}

                    </div>

                </div>
            `;

        }).join('');

    if(providers.length === 0){

        treatmentEmpty.classList.remove('hidden');

    }else{

        treatmentEmpty.classList.add('hidden');

    }

}

function bindCoreEvents(){

    document.addEventListener(
        'click',
        handleGlobalClick
    );

    document.addEventListener(
        'keydown',
        handleKeydown
    );

}

function handleGlobalClick(e){

    const audioIcon =
        e.target.closest('.audio-icon');

    if(audioIcon){

        e.stopPropagation();

        const audioId =
            audioIcon.dataset.audioId;

        playAudio(audioId);

        return;

    }

    const card =
        e.target.closest('.card');

    if(card){

        handleCardClick(card);

        return;

    }

    const closeButton =
        e.target.closest('[data-close-modal]');

    if(closeButton){

        const modalId =
            closeButton.dataset.closeModal;

        closeModal(modalId);

        return;

    }

    const lightshowButton =
        e.target.closest('[data-lightshow]');

    if(lightshowButton){

        const galleryId =
            lightshowButton.dataset.lightshow;

        openLightShow(galleryId);

        return;

    }

    const languageButton =
        e.target.closest('#languageButton');

    if(languageButton){

        openModal(languageModal);

        return;

    }

    const languageOption =
        e.target.closest('.language-option');

    if(languageOption){

        applyLanguage(
            languageOption.dataset.language
        );

        closeModal('languageModal');

        return;

    }

    const themeButton = e.target.closest('#themeButton');

    if(themeButton){

        toggleTheme();

        return;

    }

    const fontButton = e.target.closest('#fontButton');

    if(fontButton){

        toggleFontSize();

        return;

    }

    const menuButton = e.target.closest('#menuButton');

    if(menuButton){

        openMenuSheet();

        return;

    }

    
    if(e.target.id === 'printLightshow'){

        const img=document.getElementById('lightshowImage');
        if(img && img.src){
            const w=window.open('');
            w.document.write('<img src="'+img.src+'" style="max-width:100%">');
            w.document.close();
            w.focus();
            w.print();
        }
        return;

    }

    if(e.target.id === 'shareLightshow'){

        const img=document.getElementById('lightshowImage');
        if(img && img.src){
            if(navigator.share){
                navigator.share({title:'Image',url:img.src}).catch(()=>{});
            }else{
                navigator.clipboard.writeText(img.src).catch(()=>{});
            }
        }
        return;

    }

    if(e.target.id === 'downloadLightshow'){

        const img=document.getElementById('lightshowImage');
        if(img && img.src){
            const a=document.createElement('a');
            a.href=img.src;
            a.download='image';
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
        return;

    }

    if(
        menuSheet.classList.contains('active') &&
        !menuSheet.contains(e.target) &&
        !e.target.closest('.footer-item')
    ){

        closeMenuSheet();

    }

}

function handleCardClick(card){

    const type =
        card.dataset.cardType;

    if(type === 'emergency'){

        openModal(emergencyModal);

        return;

    }

    if(type === 'treatment'){

        openModal(treatmentModal);

        setTimeout(function(){

            treatmentSearch.focus();

        },100);

        return;

    }

    if(type === 'info'){

        const infoId =
            card.dataset.infoId;

        const content =
            window.INFO_CONTENT[infoId];

        if(!content) return;

        openInfoModal(content);

    }

}

function openInfoModal(content){

    infoTitle.textContent =
        content.title;

    infoSubtitle.innerHTML = `
        ${content.subtitle}

        <span
            class="audio-icon"
            data-audio-id="modalInfo"
        >
            <i class="fa-solid fa-volume-high"></i>
        </span>
    `;

    infoList.innerHTML =
        content.items.map(function(item){

            if(typeof item === 'string'){

                return `
                    <div class="info-item">
                        ${item}
                    </div>
                `;

            }

            if(item.type === 'link'){

                return `
                    <a
                        class="info-link"
                        href="${item.href}"
                        ${item.href.startsWith('http')
                            ? 'target="_blank" rel="noopener noreferrer"'
                            : ''}
                    >
                        ${item.label}
                    </a>
                `;

            }

            if(item.type === 'map'){

                return `
                    <a
                        class="info-link"
                        href="${item.href}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${item.label}
                    </a>
                `;

            }

            if(item.type === 'section'){

                return `
                    <div class="info-section">

                        <h3 class="info-section-title">
                            ${item.title}
                        </h3>

                        <div class="info-section-body">

                            ${item.body.map(function(entry){

                                if(typeof entry === 'string'){

                                    return `
                                        <div class="info-item">
                                            ${entry}
                                        </div>
                                    `;

                                }

                                if(entry.type === 'link'){

                                    return `
                                        <a
                                            class="info-link"
                                            href="${entry.href}"
                                            ${entry.href.startsWith('http')
                                                ? 'target="_blank" rel="noopener noreferrer"'
                                                : ''}
                                        >
                                            ${entry.label}
                                        </a>
                                    `;

                                }

                                if(entry.type === 'map'){

                                    return `
                                        <a
                                            class="info-link"
                                            href="${entry.href}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            ${entry.label}
                                        </a>
                                    `;

                                }

                                return '';

                            }).join('')}

                        </div>

                    </div>
                `;

            }

            return '';

        }).join('');

    bindAudioIcons();

    openModal(infoModal);

}

function openModal(modal){

    if(!modal) return;

    modal.classList.add('active');

}

function closeModal(id){

    const modal =
        document.getElementById(id);

    if(!modal) return;

    modal.classList.remove('active');

}

function bindModalEvents(){

    [
        emergencyModal,
        treatmentModal,
        infoModal,
        lightShowModal,
        languageModal,
        menuModal
    ]
    .forEach(function(modal){

        if(!modal) return;

        modal.addEventListener(
            'click',
            function(e){

                if(e.target === modal){

                    modal.classList.remove('active');

                }

            }
        );

    });

}

function bindSearch(){

    if(!treatmentSearch) return;

    treatmentSearch.addEventListener(
        'input',
        function(){

            renderTreatmentProviders(
                treatmentSearch.value
            );

        }
    );

}

function toggleTheme(){

    document.body.classList.toggle(
        'light-mode'
    );

    const isLight =
        document.body.classList.contains(
            'light-mode'
        );

    localStorage.setItem(
        'theme',
        isLight ? 'light' : 'dark'
    );

    logo.src = isLight
        ? 'pori-no-bg-dark.png'
        : 'pori-no-bg.png';

}

function toggleFontSize(){

    fontLarge = !fontLarge;

    document.documentElement
        .style
        .setProperty(
            '--text-scale',
            fontLarge ? '1.08' : '1'
        );

}

function openMenuSheet(){

    menuModal.classList.add('active');

}

function closeMenuSheet(){

    menuModal.classList.remove('active');

}

function handleKeydown(e){

    if(e.key !== 'Escape') return;

    [
        emergencyModal,
        treatmentModal,
        infoModal,
        lightShowModal,
        languageModal,
        menuModal
    ]
    .forEach(function(modal){

        modal.classList.remove('active');

    });

    closeMenuSheet();

}

function openLightShow(galleryId){

    currentLightshowId =
        galleryId || 'recovery';

    window.LIGHTSHOW_IMAGES = window.getLightshowImages ? window.getLightshowImages() : window.LIGHTSHOW_IMAGES;

    currentGallery =
        window.LIGHTSHOW_IMAGES[currentLightshowId] || [];

    currentGalleryIndex = 0;

    updateLightShowImage();

    openModal(lightShowModal);

}

function updateLightShowImage(){

    if(!currentGallery.length){

        lightShowImage.src = '';

        return;

    }

    lightShowImage.src =
        currentGallery[currentGalleryIndex];

}

function nextLightShow(){

    if(!currentGallery.length) return;

    currentGalleryIndex++;

    if(currentGalleryIndex >= currentGallery.length){

        currentGalleryIndex = 0;

    }

    updateLightShowImage();

}

function previousLightShow(){

    if(!currentGallery.length) return;

    currentGalleryIndex--;

    if(currentGalleryIndex < 0){

        currentGalleryIndex =
            currentGallery.length - 1;

    }

    updateLightShowImage();

}

function playAudio(id){

    if(!id) return;

    if(currentAudio){

        currentAudio.pause();

        currentAudio.currentTime = 0;

    }

    const languagePack =
        window.NARRATIONS[window.currentLanguage];

    if(!languagePack) return;

    const source =
        languagePack[id];

    if(!source) return;

    currentAudio =
        new Audio(source);

    currentAudio.play()
        .catch(function(err){

            console.log(
                'Audio playback failed:',
                err
            );

        });

}

function bindAudioIcons(){

    document
        .querySelectorAll('.audio-icon')
        .forEach(function(icon){

            icon.removeEventListener(
                'click',
                handleAudioIconClick
            );

            icon.addEventListener(
                'click',
                handleAudioIconClick
            );

        });

}

function handleAudioIconClick(e){

    e.stopPropagation();

    const audioId =
        this.dataset.audioId;

    playAudio(audioId);

}

window.addEventListener("orientationchange", function(){

    if(!lightShowModal.classList.contains("active")) return;

    window.LIGHTSHOW_IMAGES = window.getLightshowImages ? window.getLightshowImages() : window.LIGHTSHOW_IMAGES;

    currentGallery = window.LIGHTSHOW_IMAGES[currentLightshowId] || [];

    updateLightShowImage();

});

window.addEventListener("resize", function(){

    if(!lightShowModal.classList.contains("active")) return;

    window.LIGHTSHOW_IMAGES = window.getLightshowImages ? window.getLightshowImages() : window.LIGHTSHOW_IMAGES;

    currentGallery = window.LIGHTSHOW_IMAGES[currentLightshowId] || [];

    updateLightShowImage();

});
