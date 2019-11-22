document.addEventListener('DOMContentLoaded', () => {
    const CONSTANT = {
        hasHopeImage: ".has_hope_image",
        wrapperSearch: '.hope_image-wrapper'
    }
    const hasHopeImage = document.querySelector(CONSTANT.hasHopeImage);


    const parseFocalPoint = (str) => {
        let focal = parseFloat(str);
        if (focal === NaN) return 0.5;
        return focal;
    }

    const getOffsetValue = (parentVal, childVal, focalPoint) => {
        return (parentVal * focalPoint) - (childVal * focalPoint);
    }
    // width: 622px;
    // height: 933px;
    // 

    const validateImgDimensions = (width, height) => {
        return width !== NaN || height !== NaN;
    }

    const getNewImgDimensions = (parentNode, childNode) => {
        // (original height / original width) x new width = new height
        let newWidth = parentNode.width;
        let newHeight = (childNode.height / childNode.width) * newWidth * 1.0;

        if (newHeight < parentNode.height) {
            newHeight = parentNode.height;
            newWidth = (childNode.width / childNode.height) * newHeight * 1.0;
        }

        return [newWidth, newHeight];
    }
    // 622.19x941
    // 2500x3750

    


    const centerImagePositions = (wrapper) => {
        const img = wrapper.querySelector('img');
        const parent = {}, child = {};

        // Set Parent(wrapper) values
        parent.width = wrapper.clientWidth;
        parent.height = wrapper.clientHeight;
        // 622.19x941

        // Get Focal Points or default to 0.5
        let dataFocalPoints = img.getAttribute('data-image-focal-point').split(',');
        let focalX = parseFocalPoint(dataFocalPoints[0]);
        let focalY = parseFocalPoint(dataFocalPoints[1]);
        // 0.9960703592814372,1.0

        // Set Child(image) values
        let dataImageDimensions = img.getAttribute("data-image-dimensions").split('x');
        child.width = parseFloat(dataImageDimensions[0]);
        child.height = parseFloat(dataImageDimensions[1]);
        if (!validateImgDimensions(child.width, child.height)) {
            console.log("invalid image sizes");
            return;
        }
        // 2500x3750

        // Get New Image Dimensions
        let newImageDimensions = getNewImgDimensions(parent, child);
        let newWidth = newImageDimensions[0];
        let newHeight = newImageDimensions[1];

        // Set Child(image) with new values
        img.style.position = "relative";
        img.style.width = `${newWidth}px`;
        img.style.height = `${newHeight}px`;

        // Set Offset Values
        let newTop = getOffsetValue(parent.height, newHeight, focalY);
        img.style.top = `${newTop}px`;

        let newLeft = getOffsetValue(parent.width, newWidth, focalX);
        img.style.left = `${newLeft}px`;
    } // centerImagePosition



    if (hasHopeImage) {
        const imageWrappers = hasHopeImage.querySelectorAll(CONSTANT.wrapperSearch);

        const hopeImages = () => {
            imageWrappers.forEach(wrapper => {
                centerImagePositions(wrapper);
            })
        }

        hopeImages();
        window.addEventListener('resize', hopeImages );
    }
})

