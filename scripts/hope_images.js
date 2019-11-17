const hasHopeImageIndex = document.querySelector('has-image-index');

if(hasHopeImageIndex){
    console.log("ENTERED HOPE INDEX");

    const imageIndex = hasHopeImageIndex.querySelectorAll('.hope-image-wrapper');
    imageIndex.forEach(image => {
        console.log(image);
    })

}