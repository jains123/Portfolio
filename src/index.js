const burgerButton = document.querySelector('.burger');
const mobMenu = document.querySelector('.mob-menu');
const closeBtn = document.querySelector('.x');
const main = document.querySelector('main');
const header = document.querySelector('header');


burgerButton.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    main.style.opacity = 0.33;
    header.style.opacity = 0.33;
});

closeBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    main.style.opacity = 1; 
    header.style.opacity = 1;
});

