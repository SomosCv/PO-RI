function getLightshowFolder(){
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    return portrait
        ? "images/9-16-vertical"
        : "images/9-16-horizontal";
}

function buildGallery(){
    const folder = getLightshowFolder();
    return {
        emergency:[`${folder}/emergency.png`],
        treatment:[`${folder}/treatment.png`],
        recovery:[`${folder}/recovery.png`],
        addiction:[`${folder}/addiction.png`],
        overdose:[`${folder}/overdose.png`],
        perinatal:[`${folder}/perinatal.png`]
    };
}

window.getLightshowImages = buildGallery;
window.LIGHTSHOW_IMAGES = buildGallery();
