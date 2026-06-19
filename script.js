const slides = document.querySelectorAll('.slide');

let current = 0;

function nextSlide() {

    slides[current].classList.remove('active');

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add('active');
}

setInterval(nextSlide, 5000);


/* Gallery Lightbox */

function openImage(src) {

    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightbox-img');

    image.src = src;
    lightbox.style.display = 'flex';
}

function closeImage() {

    document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('lightbox').addEventListener('click', function (e) {

    if (e.target === this) {
        closeImage();
    }

});