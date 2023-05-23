const burger = document.querySelector('.burger');
const desktopNav = document.querySelector('.desktop-nav');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // display_nav.style.backgroundColor = '#fff';
  // display.style.backgroundColor = '#fff';
  btn.style.color = 'white';
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n
  .addEventListener('click', () => {
    burger.classList.remove('active');
    desktopNav.classList.remove('active');
    /*  display_nav.style.background = '#fff'; */
  }));
