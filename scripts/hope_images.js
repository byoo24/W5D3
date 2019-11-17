const STATE = {
    hasIndex: ".has-image-index",
    parentClass: '.hope-image-wrapper',
    childClass: '.image-item'
}


// document.addEventListener('DOMContentLoaded', () => {
    const hasHopeImageIndex = document.querySelector(STATE.hasIndex);
    
    if(hasHopeImageIndex){
        console.log("ENTERED HOPE INDEX");
    
        const imageParents = hasHopeImageIndex.querySelectorAll(STATE.parentClass);
        imageParents.forEach(parent => {
            let parentWidth = parent.clientWidth;
            let parentHeight = parent.clientHeight;
            const img = parent.querySelector(STATE.childClass);
            let imgWidth = img.clientWidth;
            let imgHeight = img.clientHeight;
            let focalPoints = img.getAttribute('data-image-focal-point').split(',');
            let focalX = focalPoints[0];
            let focalY = focalPoints[1];


            // (original height / original width) x new width = new height
            let newWidth = parentWidth;
            let newHeight = (imgHeight / imgWidth) * newWidth;

            img.style.position = "relative";
            img.style.width = `${newWidth}px`;
            img.style.height = `${newHeight}px`;
    
            console.log("imgWidth:", imgWidth, "imgHeight:", imgHeight);

        })
    
    }
// })

