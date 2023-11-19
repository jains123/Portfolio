//MOBILE NAV
const mobMenu = document.querySelector('.mob-menu')
const burgerBack = document.querySelector('.burger-back')
const burgerButton = document.querySelector('.burger')
const title = document.querySelector('title')
const l1 = document.querySelector('.line1')
const l2 = document.querySelector('.line2')
const l3 = document.querySelector('.line3')

burgerButton.addEventListener('click', () => {
  
    l1.classList.toggle('rotate-top')
    l2.classList.toggle('opaque')
    l3.classList.toggle('rotate-bottom')

    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'auto'
      } else {
        body.style.overflow = 'hidden'
    }
    
    burgerBack.classList.toggle('burger-back-active')
    setTimeout(function() {
        mobMenu.classList.toggle('active')
      }, 200)
})


//DARK MODE 
const body = document.querySelector('body')
const footer = document.querySelector('.footer-container');
const textElements = document.querySelectorAll('*:not(:empty)')
const darkMode = document.querySelector('input')
const icons = document.querySelectorAll('i')
const projects = document.getElementsByClassName('project')
const projectsArray = Array.from(projects)


function darkModeToggle(event) {
  
  if (event.target.checked) {

    body.classList.toggle('dark-mode-body')
    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i]
      element.classList.toggle('dark-mode-text')
    }
    projectsArray.forEach((project) => {
      project.classList.toggle('dark-mode-elements');
    });
    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i]
      icon.classList.toggle('dark-mode-text')
    }
    footer.classList.toggle('dark-mode-elements');
    localStorage.setItem('darkMode', 'true')    
  } else {
    body.classList.toggle('dark-mode-body')
    for (var i = 0; i < textElements.length; i++) {
      let element = textElements[i];
      element.classList.toggle('dark-mode-text');
    }
    projectsArray.forEach((project) => {
      project.classList.toggle('dark-mode-elements');
    });
    for (var i = 0; i < icons.length; i++) {
      let icon = icons[i];
      icon.classList.toggle('dark-mode-text');
    }
    footer.classList.toggle('dark-mode-elements');
    localStorage.setItem('darkMode', false)
  } 
} 

darkMode.addEventListener("change", darkModeToggle)

const darkModeStartUp = () => {

  if (localStorage.getItem('darkMode') == 'true') {
      darkMode.checked = true
      darkMode.dispatchEvent(new Event('change'))
  } else if (localStorage.getItem('darkMode') == 'false') {
      darkMode.checked = false
      localStorage.setItem('darkMode', 'false')
  }
}

darkModeStartUp()



