function getLightshowFolder(){
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    return portrait
        ? "images/9-16-vertical"
        : "images/9-16-horizontal";
}

function buildGallery(){
    const folder = getLightshowFolder();
    return {
        recovery:[`${folder}/1.png`,`${folder}/2.png`,`${folder}/3.png`],
        overdose:[`${folder}/4.png`,`${folder}/5.png`],
        treatment:[`${folder}/6.png`,`${folder}/7.png`]
    };
}

window.getLightshowImages = buildGallery;
window.LIGHTSHOW_IMAGES = buildGallery();
