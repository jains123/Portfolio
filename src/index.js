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