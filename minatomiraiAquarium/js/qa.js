document.querySelectorAll(`.qaQuestion`).forEach(button => {
    button.addEventListener(`click`, () => {
        const qaItem = button.parentElement;
        document.querySelectorAll(`.qaItem`).forEach(item => {
            if (item !== qaItem) {
                item.classList.remove(`open`);
            }
        });
        qaItem.classList.toggle(`open`)
    })
});
