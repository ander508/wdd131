const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


// For Loop


// for (let i = 0; i <= studentReport.length - 1; i++){
    
//     if (studentReport[i] < LIMIT){
//     const paraElement  = document.querySelector('.iteration')
//     paraElement.innerHTML += `<li>${i}</li>`
    
// }
// }
       
       
// While Loop

// let  i = 0
// while (i <= studentReport.length - 1){
//     if (studentReport[i] < LIMIT){
//     const paraElement  = document.querySelector('.iteration')
//     paraElement.innerHTML += `<li>${i}</li>`
// }
//     ++i
// }


// for (list of studentReport){
//     if (list < LIMIT){
//             const paraElement  = document.querySelector('.iteration')
//             paraElement.innerHTML += `<li>${list}</li>`
// }
// }


// for (list in studentReport){
//     if (studentReport[list] < LIMIT){
//             const paraElement  = document.querySelector('.iteration')
//             paraElement.innerHTML += `<li>${studentReport[list]}</li>`
// }

// }


// function generateList(item){
//     if (item < LIMIT){
//         return `<li>${item}</li>`
// }
//     }
// const paraElement  = document.querySelector('.iteration')
// const listMembers = studentReport.map(generateList)
// paraElement.innerHTML =listMembers.join(' ')


// studentReport.forEach( function (item){
//     if (item< LIMIT){
//         const paraElement  = document.querySelector('.iteration')
//         paraElement.innerHTML += `<li>${item}</li>`
//     }
// })


// const now = new Date()
// const paraElement  = document.querySelector('.iteration')
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// i = 0
// while (i < dayNames.length){
//     const paraElement  = document.querySelector('.iteration')
//     paraElement.innerHTML += `<li>${dayNames[i]}</li>`
//     i++
// }



let today = new Date()
let options = {weekday: 'long'}

for (i = 0 ; i <= 6; i++){
    let startDate = new Date()
    
    startDate.setDate(today.getDate() + i )
    let dayName = startDate.toLocaleDateString('en-Us', {weekday: 'long'})
    const paraElement  = document.querySelector('.iteration')
    paraElement.innerHTML += `<li>${dayName}</li>`
    
}






