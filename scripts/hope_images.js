document.addEventListener('DOMContentLoaded', () => {
    const CONSTANT = {
        hasHopeImage: ".has_hope_image",
        wrapperSearch: '.hope_image-wrapper',
        imgSearch: '.hope_image'
    }
    
    const hasHopeImage = document.querySelector(CONSTANT.hasHopeImage);

    const parseFocalPoint = (str) => {
        let focal = parseFloat(str);
        if (focal === NaN) return 0.5;
        return focal;
    }

    const getAspectRatio = (num1, num2) => {
        return num1 / num2;
    }

    const getOffsetValue = (parentVal, childVal, focalPoint) => {
        return (parentVal * focalPoint) - (childVal * focalPoint);
    }

    


    const centerImagePosition = (parent) => {
        const img = parent.querySelector('img');

        let wrapperWidth = parent.clientWidth;
        let wrapperHeight = parent.clientHeight;

        let dataFocalPoints = img.getAttribute('data-image-focal-point').split(',');
        let focalX = parseFocalPoint(dataFocalPoints[0]);
        let focalY = parseFocalPoint(dataFocalPoints[1]);

        let dataImageDimensions = img.getAttribute("data-image-dimensions").split('x');
        let imgWidth = parseInt(dataImageDimensions[0]);
        let imgHeight = parseInt(dataImageDimensions[1]);


        // (original height / original width) x new width = new height
        let newWidth, newHeight;

        if (getAspectRatio(wrapperWidth, wrapperHeight) < getAspectRatio(imgWidth, imgHeight)) {
            newHeight = wrapperHeight;
            newWidth = (imgWidth / imgHeight) * newHeight;
        } else {
            newWidth = wrapperWidth;
            newHeight = (imgHeight / imgWidth) * newWidth;
        }


        // Set values
        img.style.position = "relative";
        img.style.width = `${newWidth}px`;
        img.style.height = `${newHeight}px`;

        let newTop = getOffsetValue(wrapperHeight, newHeight, focalY);
        img.style.top = `${newTop}px`;
        console.log(newTop);

        let newLeft = getOffsetValue(wrapperWidth, newWidth, focalX);
        img.style.left = `${newLeft}px`;
        console.log(newLeft);
    } // centerImagePosition


    if (hasHopeImage) {
        const hopeImages = hasHopeImage.querySelectorAll(CONSTANT.wrapperSearch);

        hopeImages.forEach(image => {
            centerImagePosition(image);
            window.addEventListener('resize', function(){ centerImagePosition(image) });
        })
    }
})

