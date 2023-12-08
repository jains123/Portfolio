//IMPORTS
import { mobMenu } from "./js/mob";
import { darkModeToggle } from "./js/darkmode";
const burgerButton = document.querySelector('.burger')

//EVENT LISTENERS
burgerButton.addEventListener('click', mobMenu);
toggle.addEventListener('click', darkModeToggle);

//CHECKS IF DARKMODE WAS ACTIVATED IN PREVIOUS VISIT
if (localStorage.getItem('darkMode') == 'true') {
  darkModeToggle();
}

const blob = document.querySelectorAll('.blob')

for (let i = 0; i < blob.length; i++) {

  let randomTop = Math.floor(Math.random() * 70);
  let randomLeft = Math.floor(Math.random() * 70);
  let div = blob[i];
  div.style.top = `${randomTop}%`;
  div.style.left = `${randomLeft}%`;
}