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
        let parentWidth = parent.clientWidth;
        let parentHeight = parent.clientHeight;
        const img = parent.querySelector(STATE.childClass);
        let imgWidth = img.offsetWidth;
        let imgHeight = img.offsetHeight;


        console.log("img.clientWidth:", imgWidth, "img.clientHeight:", imgHeight, "img.width:", img.width, "img.height:", img.height);
    })

}