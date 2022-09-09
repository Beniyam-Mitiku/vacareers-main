/* Main nav */
const body = document.querySelector('body');
const nav = document.querySelector('#site-nav');
const navOpen = document.querySelector('#site-nav-open-btn');
const navClose = document.querySelector('#site-nav-close-btn');

/* Main menu dropdowns - relies on mega menu (if removing mega menu, just remove "mega-" prefix) */
const menuItems = document.querySelectorAll('li.mega-menu-item-has-children');
const currentMenuParent = document.querySelector('.mega-current-menu-parent');
const indicators = document.querySelectorAll('.mega-indicator');

/* Open the main nav */
function openNav(e) {
    e.preventDefault();
    body.classList.add('nav-open');
    nav.classList.add('is-open');
    nav.classList.remove('is-closed');

    /* Opens submenu of current page */
    if (currentMenuParent) {
        currentMenuParent.classList.add('open');
        currentMenuParent.querySelector('a').setAttribute('aria-expanded', 'true');

    }
}

navOpen.addEventListener('click', openNav);

/* Close the main nav */
function closeNav(e) {
    e.preventDefault();
    body.classList.remove('nav-open');
    nav.classList.remove('is-open');
    nav.classList.add('is-closed');
}

navClose.addEventListener('click', closeNav);
// TODO: make it close with the ESC key too

/* Menu dropdowns */
function toggleDropdown(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('open');
    this.setAttribute('aria-expanded', !this.getAttribute('aria-expanded')); // TODO: This might not work on Firefox
}

menuItems.forEach((el) => {
    el.querySelector('a').addEventListener("click", toggleDropdown);
});

indicators.forEach((el) => {
    el.remove();
});

document.querySelector('.mega-menu-toggle').remove();

// TODO: may need to setup focus trap - /node_modules/@uswds/uswds/packages/uswds-core/src/js/utils/focus-trap.js