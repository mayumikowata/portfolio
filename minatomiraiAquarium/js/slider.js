const slides = document.querySelectorAll(".slide_item");
const btns = document.querySelectorAll(".pagenation_btn");

let current = 0;
const total = slides.length;
let autoPlayInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    btns.forEach((bar, i) => {
        bar.classList.toggle("active", i === index);
    });
    current = index;
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        const next = (current + 1) % total;
        showSlide(next);
    }, 5000);
}

btns.forEach((bar, i) => {
    bar.addEventListener("click", () => {
        showSlide(i);
        clearInterval(autoPlayInterval);
        startAutoPlay();
    });
});

showSlide(current);
startAutoPlay();