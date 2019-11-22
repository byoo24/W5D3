document.addEventListener('DOMContentLoaded', () => {
    const CONSTANT = {
        hasHopeImage: ".has_hope_image",
        wrapperSearch: '.index_thumbnail-wrapper'
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


    const getNewImgDimensions = (parentNode, childNode) => {
        // (original height / original width) x new width = new height
        let newWidth = parentNode.width;
        let newHeight = (childNode.height / childNode.width) * newWidth;

        if (newHeight < parentNode.height) {
            newHeight = parentNode.height;
            newWidth = (childNode.width / childNode.height) * newHeight;
        }

        return [newWidth, newHeight];
    }

    


    const centerImagePosition = (wrapper) => {
        const img = wrapper.querySelector('img');
        const parent = {}, child = {};

        // Set Parent(wrapper) values
        parent.width = wrapper.clientWidth;
        parent.height = wrapper.clientHeight;

        // Get Focal Points or default to 0.5
        let dataFocalPoints = img.getAttribute('data-image-focal-point').split(',');
        let focalX = parseFocalPoint(dataFocalPoints[0]);
        let focalY = parseFocalPoint(dataFocalPoints[1]);

        // Set Child(image) values
        let dataImageDimensions = img.getAttribute("data-image-dimensions").split('x');
        child.width = parseInt(dataImageDimensions[0]);
        child.height = parseInt(dataImageDimensions[1]);

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
        console.log(newTop);

        let newLeft = getOffsetValue(parent.width, newWidth, focalX);
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

