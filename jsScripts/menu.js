const burger = document.querySelector('.burger');
const desktopNav = document.querySelector('.desktop-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    desktopNav.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.
    addEventListener('CLICK', () => {
        burger.classList.remove('active')
    }))