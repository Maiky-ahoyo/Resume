const menuButton = document.getElementById('menu_button');
const mobileMenu = document.getElementById('mobile_menu');

function scrollToStart(id) {
    const seccion = document.getElementById(id);

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

menu_button.addEventListener('click', function () {
    if (mobile_menu.classList.contains('menu-hidden')) {
        mobile_menu.classList.remove('menu-hidden');
        mobile_menu.classList.add('menu-visible');
    } else {
        mobile_menu.classList.remove('menu-visible');
        mobile_menu.classList.add('menu-hidden');
    }
});

document.addEventListener('click', function (event) {
    if (!mobile_menu.contains(event.target) && !menu_button.contains(event.target)) {
        if (!mobile_menu.classList.contains('menu-hidden')) {
            mobile_menu.classList.remove('menu-visible');
            mobile_menu.classList.add('menu-hidden');
        }
    }
});
