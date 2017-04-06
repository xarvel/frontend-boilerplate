let menu = document.getElementById('js-menu');
let menuItems = menu.getElementsByClassName('menu__item');

Array.from(menuItems).forEach(function (element) {
    let timeout;
    element.addEventListener('mouseover', function (event) {
        element.classList.add('hover');
        clearTimeout(timeout);
    });
    element.addEventListener('mouseout', function (event) {
        timeout = setTimeout(function () {
            element.classList.remove('hover');
        }, 500)
    });
});
