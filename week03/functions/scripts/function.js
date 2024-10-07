let first = 'Oluchukwu'
let last = 'Offor'


let fullName = function (first, last){
   let  name = `${first} ${last}`
    return name
}
// fullName(first, last)


// an anonymous function expression

// let fullName = function (first, last){
//     console.log(`${first} ${last}`)
// }
// fullName(first, last)

// an arrow function expression

// let fullName = (fisrt, last) =>{
//     console.log(`${first} ${last}`)
// }
// fullName(first, last)


function displayFullname(fullName) {
    let myName = document.querySelector('#fullname')
    myName.textContent = fullName
}

displayFullname(fullName(first, last))