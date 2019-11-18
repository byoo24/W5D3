const STATE = {
    hasIndex: ".has-image-index",
    parentClass: '.hope-image-wrapper',
    childClass: '.image-item'
}




const centerImage = (parent) => {
    const child = parent.querySelector('img');
    // const childSrc = parent.getAttribute('data-src');
    // child.src = childSrc;

    let parentWidth = parent.clientWidth;
    let parentHeight = parent.clientHeight;

    let dataFocalPoints = child.getAttribute('data-image-focal-point').split(',');
    let focalX = parseFloat(dataFocalPoints[0]) || 0.5;
    let focalY = parseFloat(dataFocalPoints[1]) || 0.5;
    console.log("focalX:", focalX, "focalY:", focalY);

    let dataImageDimensions = child.getAttribute("data-image-dimensions").split('x');
    let childWidth = parseInt(dataImageDimensions[0]) || parentWidth;
    let childHeight = parseInt(dataImageDimensions[1]) || parentHeight;
    console.log("childWidth:", childWidth, "childHeight:", childHeight);

    // (original height / original width) x new width = new height
    let newWidth = parentWidth;
    let newHeight = (childHeight / childWidth) * newWidth;

    child.style.position = "relative";
    child.style.width = `${newWidth}px`;
    child.style.height = `${newHeight}px`;
    console.log("newWidth:", newWidth, "newHeight:", newHeight);

    let newTop = (parentHeight * focalY) - (newHeight * focalY) || 0;
    child.style.top = `${newTop}px`;
    console.log(newTop);
}



document.addEventListener('DOMContentLoaded', () => {
    
    const hasHopeImageIndex = document.querySelector(STATE.hasIndex);

    if (hasHopeImageIndex !== undefined) {
        console.log("ENTERED HOPE INDEX");
        const imageParents = hasHopeImageIndex.querySelectorAll(STATE.parentClass);

        imageParents.forEach(parent => {        
            centerImage(parent);
        })
    }
})

