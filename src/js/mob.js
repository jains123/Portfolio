const mobItems = document.querySelector('.mob-menu')
const burgerBack = document.querySelector('.burger-back')
const burgerButton = document.querySelector('.burger')
const title = document.querySelector('title')
const l1 = document.querySelector('.line1')
const l2 = document.querySelector('.line2')
const l3 = document.querySelector('.line3')

export function mobMenu () {
    l1.classList.toggle('rotate-top')
    l2.classList.toggle('opaque')
    l3.classList.toggle('rotate-bottom')

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
    }
    burgerBack.classList.toggle('burger-back-active')
    setTimeout(function() {
        mobItems.classList.toggle('active')
      }, 200)
}