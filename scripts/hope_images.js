const CONSTANT = {
    hasHopeImage: ".has_hope_image",
    thumbnailSearch: '.hope_thumbnail',
    wrapperSearch: '.hope_image-wrapper',
    imgSearch: '.hope_image',
    extendedWidth: 1.2
}




const centerThumbnailImages = (thumbnail) => {
    console.log('RESIZED');
    const imgWrapper = thumbnail.querySelector(CONSTANT.wrapperSearch);
    const img = thumbnail.querySelector(CONSTANT.imgSearch);
    // const child = thumbnail.querySelector('img');

    const STATE = {};

    STATE.thumbnailWidth = thumbnail.clientWidth;
    STATE.thumbnailHeight = thumbnail.clientHeight;

    let dataFocalPoints = img.getAttribute('data-image-focal-point').split(',');
    let focalX = parseFloat(dataFocalPoints[0]);
    let focalY = parseFloat(dataFocalPoints[1]);
    STATE.focalX = focalX !== NaN ? focalX : 0.5;
    STATE.focalY = focalY !== NaN ? focalY : 0.5;
    console.log("focalX:", STATE.focalX, "focalY:", STATE.focalY);

    STATE.wrapperWidth = imgWrapper.clientWidth;
    STATE.wrapperHeight = imgWrapper.clientHeight;
    console.log("wrapperWidth:", STATE.wrapperWidth, "wrapperHeight:", STATE.wrapperHeight);

    let dataImageDimensions = img.getAttribute("data-image-dimensions").split('x');
    STATE.imgWidth = parseInt(dataImageDimensions[0]);
    STATE.imgHeight = parseInt(dataImageDimensions[1]);
    console.log("imgWidth:", STATE.imgWidth, "imgHeight:", STATE.imgHeight);

        if (STATE.imgWidth === NaN) {
            console.log('invalid image width');
            return;
        }

        if (STATE.imgHeight === NaN) {
            console.log('invalid image height');
            return;
        }

    // (original height / original width) x new width = new height
    let newWidth = STATE.wrapperWidth;
    let newHeight = (STATE.imgHeight / STATE.imgWidth) * newWidth;

    img.style.position = "relative";
    img.style.width = `${newWidth}px`;
    img.style.height = `${newHeight}px`;
    console.log("newWidth:", newWidth, "newHeight:", newHeight);

    let newTop = (STATE.thumbnailHeight * focalY) - (newHeight * focalY);
        // newTop = newTop >= 0 ? newTop : 0;
        // newTop = newTop <= STATE.thumbnailHeight ? newTop : STATE.thumbnailHeight;
    img.style.top = `${newTop}px`;
    console.log(newTop);

    let newLeft = (newWidth * focalX) - (STATE.thumbnailWidth * focalX);
        // newLeft = newLeft >= 0 ? newLeft : 0;
        // newLeft = newLeft <= STATE.thumbnailWidth ? newLeft : STATE.thumbnailWidth; 
    img.style.left = `${newLeft}px`;
    console.log(newLeft);
}



document.addEventListener('DOMContentLoaded', () => {
    
    const hasHopeImage = document.querySelector(CONSTANT.hasHopeImage);

    if (hasHopeImage) {
        console.log("ENTERED HOPE INDEX");
        const thumbnails = hasHopeImage.querySelectorAll(CONSTANT.thumbnailSearch);

        thumbnails.forEach(thumbnail => {
            centerThumbnailImages(thumbnail);
            window.addEventListener('resize', function(){ centerThumbnailImages(thumbnail) });
        })
    }
})

