let tasks = []

function newTask(){
    const taskEntered = document.querySelector('#todo')
    const inputValued = taskEntered.value
    tasks.push(inputValued)
    taskEntered.value = '';
    return tasks
    // console.log(tasks)
    
  
}
function renderTask(){
    const todoList = document.querySelector('#todoList');
    todoList.innerHTML =''
    for ( let item of tasks)
        todoList.innerHTML += `<li>${item}<span>X</span></li>`
}



const submitTask = document.querySelector('#submitTask')
submitTask.addEventListener('click',function (){
    newTask()
    renderTask()
    const taskEntered = document.querySelector('#todo').value;
    taskEntered = ' '
})
   
   
   
