const menu = document.querySelector('#menu')
const aElement = document.querySelector('h1')
const navElement = document.querySelector('nav')


menu.addEventListener('click', function (){
    aElement.textContent = "Me"
    menu.classList.toggle('show')
    navElement.classList.toggle('show')
})



