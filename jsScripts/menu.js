const burger = document.querySelector('.burger');
const desktopNav = document.querySelector('.desktop-nav');
const display_nav = document.querySelector('header');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    desktopNav.classList.toggle('active'); 
  /*  display_nav.style.background = '#6070ff'; */

});

document.querySelectorAll('.nav-items').forEach(n => n.
    addEventListener('click', () => {
        burger.classList.remove('active');
        desktopNav.classList.remove('active');
      /*  display_nav.style.background = '#fff'; */

    }));
    