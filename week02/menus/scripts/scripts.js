

const menu = document.querySelector('#menu')
const nav = document.querySelector('.navigation')

menu.addEventListener('click', ()=>{
    
    
    if (menu.innerHTML === '≡'){
         menu.innerHTML = 'X'
         nav.classList.remove('hide')
         nav.classList.add('show')
        
    }
   else if (menu.innerHTML === 'X'){
        menu.innerHTML = '≡'
        nav.classList.remove('show')
        nav.classList.add('hide')
   }
    
})

// //Method 2 
// const mainnav = document.querySelector('.navigation')
// const hambutton = document.querySelector('#menu');

// // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });

// /* ❔What does toggle mean?
// We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
// The CSS class rules will handle the different views, layouts, and displays.
// 🗝️ JavaScript only applies the class value or not.
// */

