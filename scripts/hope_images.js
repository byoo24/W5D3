const hasHopeImageIndex = document.querySelector('.has-image-index');

if(hasHopeImageIndex){
    console.log("ENTERED HOPE INDEX");

    const imageParents = hasHopeImageIndex.querySelectorAll('.hope-image-wrapper');
    imageParents.forEach(parent => {
        let parentWidth = parent.clientWidth;
        let parentHeight = parent.clientHeight;
        const img = parent.querySelector('img');
        let imgWidth = img.clientWidth;
        let imgHeight = img.clientHeight;


        console.log(parentWidth, parentHeight, imgWidth, imgHeight);
    })

}