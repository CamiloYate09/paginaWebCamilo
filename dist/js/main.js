

//

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}
//************************************************
//**********Cambiar de nombres********************
window.addEventListener("DOMContentLoaded", () => {

    const textOutput = document.querySelector('.titulo'),
        phrases = ['Ingeniero de Software', 'Estudiante de Inteligencia Artificial', 'Emprendedor'],
        delay = [2000, 4000, 6000,8000];

    phrases.forEach((phrase, i) => setTimeout(() => textOutput.textContent = phrase, delay[i]));

});
//************************************************