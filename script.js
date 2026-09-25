let hamburger = document.querySelector('#hamburger');
let navMenu = document.querySelector('#navMenu');
let navLinks = document.querySelectorAll('#navMenu a');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
}

hamburger.onclick = toggleMenu;

navLinks.forEach(link => {
    link.onclick = () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    };
});