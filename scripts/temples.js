const button = document.querySelector('button')
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav a')

menu.addEventListener('click', function(){
    if( menu.innerHTML === '☰'){
        menu.innerHTML = 'X'
        nav.classList.remove('hide')
        nav.classList.add('open')
    }
    else{
        menu.innerHTML = '☰'
        nav.classList.remove('open')
        nav.classList.add('hide')
    }
})
const heading = document.querySelector('h2')
navLinks.forEach(function (link){
    link.addEventListener('click', function (event){
        event.preventDefault(); 
        heading.textContent = link.textContent
    })
})
    
const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${oLastModif.toLocaleString()}`;




