const STATE = {
    hasIndex: ".has-image-index",
    queryParents: '.lazy-wrapper',
    queryChild: '.image-item'
}





const centerImage = (parent) => {
    const child = parent.querySelector('img');
    const childSrc = child.getAttribute('data-src');
    child.src = childSrc;

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







document.addEventListener("DOMContentLoaded", function () {
    let lazyParentImages = [].slice.call(document.querySelectorAll("queryParents"));
    let active = false;

    const lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {

                lazyParentImages.forEach(lazyParent => {
                    let lazyChild = lazyParent.querySelector(queryChild);

                    centerImage(lazyParent);

                    if ((lazyChild.getBoundingClientRect().top <= window.innerHeight && lazyChild.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyChild).display !== "none") {
                        lazyParent.classList.remove("lazy-wrapper");

                        lazyParentImages = lazyParentImages.filter(function (image) {
                            return image !== lazyChild;
                        });

                        if (lazyParentImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                })

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});
















// document.addEventListener('DOMContentLoaded', () => {
    
//     const hasHopeImageIndex = document.querySelector(STATE.hasIndex);

//     if (hasHopeImageIndex !== undefined) {
//         console.log("ENTERED HOPE INDEX");
//         const imageParents = hasHopeImageIndex.querySelectorAll(STATE.parentClass);

//         imageParents.forEach(parent => {
            
            
//             centerImage(parent);
            

            

            

            


//         })
//     }
    

// })

