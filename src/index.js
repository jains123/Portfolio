const mobMenu = document.querySelector('.mob-menu');
const burgerBack = document.querySelector('.burger-back');
const burgerButton = document.querySelector('.burger');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const body = document.querySelector('body');

console.log(textElements);
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

const textElements = document.querySelectorAll('*:not(:empty)');
const darkMode = document.querySelector('input');
const icons = document.querySelectorAll('i');

console.log(icons);

function darkModeToggle(event) {
  if (event.target.checked) {

    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i];
      element.classList.toggle('dark-mode-text');
      body.classList.toggle('dark-mode-body');
    }

    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i];
      icon.classList.toggle('dark-mode-text');
    }

  } else {

    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i];
      element.classList.toggle('dark-mode-text');
      body.classList.toggle('dark-mode-body');
    }

    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i];
      icon.classList.toggle('dark-mode-text');
    }
  }
}

darkMode.addEventListener("change", darkModeToggle);



