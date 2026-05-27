const isMobile = window.innerWidth <= 1024;

const folder = isMobile
    ? 'images/9-16-vertical'
    : 'images/16-9-horizontal';

window.LIGHTSHOW_IMAGES = {

    recovery: [
        `${folder}/1.png`,
        `${folder}/2.png`,
        `${folder}/3.png`,
    ],

    overdose: [
        `${folder}/4.png`,
        `${folder}/5.png`,
    ],

    treatment: [
        `${folder}/6.png`,
        `${folder}/7.png`,
    ]

};