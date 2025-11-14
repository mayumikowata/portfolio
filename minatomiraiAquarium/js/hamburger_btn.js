const hamburger = document.getElementById(`hamburger`);
const slideMenu = document.getElementById(`slideMenu`);
const overlay = document.querySelector(`.overlay`);

hamburger.addEventListener(`click`, () => {
    hamburger.classList.toggle(`active`);
    slideMenu.classList.toggle(`open`);
    overlay.classList.toggle(`active`)
});

overlay.addEventListener(`click`, () => {
    hamburger.classList.remove(`active`);
    slideMenu.classList.remove(`open`);
    overlay.classList.remove(`active`);
});