// const input = document.querySelector('#book')
// const button = document.querySelector('button')
// const list = document.querySelector('.list')
// const createListItems = document.createElement('li')
// const createDeleteBtn = document.createElement('button')
// createListItems.innerHTML = input.value
// createDeleteBtn.innerHTML = "X"
// createListItems.append(createDeleteBtn)
// list.append(createListItems)
const input = document.querySelector('input').value
const button = document.querySelector('button')
const list = document.querySelector('.list')
// const inputEntered = input.value


button.addEventListener('click', function (){
    if (input.trim() !== ' '){
        const input = document.querySelector('input').value
        const button = document.querySelector('button')
        const list = document.querySelector('.list')
        
       list.innerHTML += `<li>${input}<p></p><button id="deleteButton">X</button></li>`
    }
    else{
        input.focus()
    }
})

const deleteBtn = document.querySelector('#deleteButton')
deleteBtn.addEventListener('click', () =>{
    deleteBtn.classList.add('color')
    list.removeChild(li);
    input.focus();
  });

// button.addEventListener('click', function(){
//     const createListItems = document.createElement('li')
//     const createDeleteBtn = document.createElement('button')
//     createListItems.innerHTML = input.value
//     createDeleteBtn.innerHTML = "X"
//     createListItems.append(createDeleteBtn)
//     list.append(createListItems)
    
// })

// button.addEventListener('click', function(){
// const list = document.querySelector('.list')
// const input = document.querySelector('.book').value
// list.innerHTML += `<li>${input}<button class="btn">X</button></li>`
  
   
    
// })