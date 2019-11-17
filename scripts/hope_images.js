const STATE = {
    hasIndex: ".has-image-index",
    parentClass: '.hope-image-wrapper',
    childClass: '.image-item'
}





document.addEventListener('DOMContentLoaded', () => {
    

    const centerImages = function () {
        const hasHopeImageIndex = document.querySelector(STATE.hasIndex);

        if (hasHopeImageIndex !== undefined) {
            console.log("ENTERED HOPE INDEX");
            const imageParents = hasHopeImageIndex.querySelectorAll(STATE.parentClass);

            imageParents.forEach(parent => {
                const img = parent.querySelector(STATE.childClass);
                let parentWidth = parent.clientWidth;
                let parentHeight = parent.clientHeight;
                let imgWidth = img.clientWidth;
                let imgHeight = img.clientHeight;

                let dataFocalPoints = img.dataset["image-focal-point"];
                // let dataFocalPoints = img.getAttribute('data-image-focal-point').split(',');
                // let focalX = dataFocalPoints[0];
                // let focalY = dataFocalPoints[1];
                // console.log("focalX:", focalX, "focalY:", focalY);
                console.log("dataFocalPoints:", dataFocalPoints);

                let dataImageDimensions = img.dataset["image-dimensions"];
                console.log("dataImageDimensions:", dataImageDimensions);

                // (original height / original width) x new width = new height
                let newWidth = parentWidth;
                let newHeight = (imgHeight / imgWidth) * newWidth;

                img.style.position = "relative";
                img.style.width = `${newWidth}px`;
                img.style.height = `${newHeight}px`;

                console.log("imgWidth:", imgWidth, "imgHeight:", imgHeight);

            })
        }
    }

    centerImages();
})

