const mobMenu = document.querySelector('.mob-menu');
const burgerBack = document.querySelector('.burger-back');
const burgerButton = document.querySelector('.burger');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const body = document.querySelector('body');


burgerButton.addEventListener('click', () => {
    l1.classList.toggle('rotate-top');
    l2.classList.toggle('opaque');
    l3.classList.toggle('rotate-bottom');

    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'auto';
      } else {
        body.style.overflow = 'hidden';
    }
    
    burgerBack.classList.toggle('burger-back-active');
    setTimeout(function() {
        mobMenu.classList.toggle('active');
      }, 200);
});


