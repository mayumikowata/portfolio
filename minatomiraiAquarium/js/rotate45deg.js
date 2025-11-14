window.addEventListener("scroll", () => {
    const imgs = document.querySelectorAll(".scroll_img img");
    const scrollY = window.scrollY;
    const pOrN = Math.sin(scrollY / 80) * 20;

    let angle;

    if (pOrN >= 0) {
        angle = 20;
    } else {
        angle = -20;
    }

    imgs.forEach(img => {
        img.style.transform = `rotate(${angle}deg)`;
    });
});