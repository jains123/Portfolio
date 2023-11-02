//MOBILE NAV
const mobMenu = document.querySelector('.mob-menu');
const burgerBack = document.querySelector('.burger-back');
const burgerButton = document.querySelector('.burger');
const title = document.querySelector('title');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');

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


//DARK MODE 
const body = document.querySelector('body');
const textElements = document.querySelectorAll('*:not(:empty)');
const darkMode = document.querySelector('input');
const icons = document.querySelectorAll('i');

function darkModeToggle(event) {
  
  if (event.target.checked) {

    body.classList.toggle('dark-mode-body');
    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i];
      element.classList.toggle('dark-mode-text');
      }
    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i];
      icon.classList.toggle('dark-mode-text');
    }
    localStorage.setItem('darkMode', 'true');
    console.log(localStorage.getItem('darkMode'));
    
  } else {
    body.classList.toggle('dark-mode-body');
    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i];
      element.classList.toggle('dark-mode-text');
    }
    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i];
      icon.classList.toggle('dark-mode-text');
    }
    localStorage.setItem('darkMode', false);
    console.log(localStorage.getItem('darkMode'));

  }
} 

darkMode.addEventListener("change", darkModeToggle);

const darkModeStartUp = () => {

  if (localStorage.getItem('darkMode') == 'true') {
      console.log('firing');
      darkMode.checked = true;
  } else if (localStorage.getItem('darkMode') == 'false') {
      darkMode.checked = false;
      localStorage.setItem('darkMode', 'false');
  };
}

darkModeStartUp();

console.log(localStorage.getItem('darkMode'));


