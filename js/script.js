const hamburgerMenu = document.getElementsByClassName('hamburger-icon');
const navLinks = document.getElementsByClassName('nav-items');

for (let i = 0; i < hamburgerMenu.length; i++) {
    let hamburger = hamburgerMenu[i];
    let nav = navLinks[i];

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}