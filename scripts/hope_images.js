const STATE = {
    hasIndex: ".has-image-index",
    parentClass: '.image-wrapper',
    childClass: '.image-item'
}

const hasHopeImageIndex = document.querySelector(STATE.hasIndex);

if(hasHopeImageIndex){
    console.log("ENTERED HOPE INDEX");

    const imageParents = hasHopeImageIndex.querySelectorAll(STATE.parentClass);
    imageParents.forEach(parent => {
        let parentWidth = parent.width;
        let parentHeight = parent.height;
        const img = parent.querySelector(STATE.childClass);
        let imgWidth = img.width;
        let imgHeight = img.height;


        console.log(parentWidth, parentHeight, imgWidth, imgHeight);
    })

}