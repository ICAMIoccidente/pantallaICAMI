document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);

    // Cambiar a la siguiente imagen cada 3 segundos (ajusta el tiempo según tus necesidades)
    setInterval(nextSlide, 7000);
});
