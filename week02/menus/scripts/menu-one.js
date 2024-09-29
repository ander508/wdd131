const menu = document.querySelector('#menu')
const nav = document.querySelector('.navigation')


menu.addEventListener('click', function (){
    if (menu.innerHTML === '☰'){
        menu.innerHTML = 'X'
        nav.classList.remove('hide')
        nav.classList.add('show')
    }
    else{
        menu.innerHTML = '☰'
        nav.classList.remove('show')
        nav.classList.add('hide')
    }
})