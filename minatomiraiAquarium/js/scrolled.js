const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const stationHeight = document.querySelector(".header_station").offsetHeight;

    if (window.scrollY > stationHeight) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});