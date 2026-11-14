

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
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Cerrar menú');

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menú');

        // Set Menu State
        showMenu = false;
    }
}
//************************************************
//**********Cambiar de nombres********************
window.addEventListener("DOMContentLoaded", () => {

    const textOutput = document.querySelector('.titulo'),
        phrases = ['Ingeniero de Software', 'Estudiante de Inteligencia Artificial', 'Emprendedor'];

    // Only the home page has the rotating subtitle
    if (!textOutput) return;

    // With reduced motion, keep the static text that lists all three
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Fade out, swap the phrase, fade back in; loops forever
    let current = -1;
    const next = () => {
        textOutput.classList.add('is-changing');
        setTimeout(() => {
            current = (current + 1) % phrases.length;
            textOutput.textContent = phrases[current];
            textOutput.classList.remove('is-changing');
        }, 400);
    };
    setTimeout(() => {
        next();
        setInterval(next, 3000);
    }, 2000);

});
//************************************************