document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".event_slider");
    const slides = document.querySelectorAll(".event_dl_container");
    const nextBtn = document.querySelector(".slide_next")
    const prevBtn = document.querySelector(".slide_prev");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    });

    let startX = 0;
    slider.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    slider.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextBtn.click();
        if (endX - startX > 50) prevBtn.click();
    });
});