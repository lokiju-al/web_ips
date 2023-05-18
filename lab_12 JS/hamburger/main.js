(function () {
    const menu = document.querySelector('.menu');
    const hamburger = menu.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_open')
    })
})();
