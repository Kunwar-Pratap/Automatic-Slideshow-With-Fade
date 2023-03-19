let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let slideDots = document.getElementsByClassName('slide-dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slideDots.length; i++) {
        slideDots[i].className = slideDots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slideDots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000)
}