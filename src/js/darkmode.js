const body = document.querySelector('body')
const footer = document.querySelector('.footer-container');
const textElements = document.querySelectorAll('*:not(:empty)')
const icons = document.querySelectorAll('i')
const projects = document.getElementsByClassName('project')
const projectsArray = Array.from(projects)
const toggle = document.getElementById('toggle');
const mobileToggle = document.getElementById('mobileToggle')

export function darkModeToggle () {
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
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode-body'));
}