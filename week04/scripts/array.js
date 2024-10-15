//  arrays.js
// activity 1
const steps = ["one", "two", "three"];
const listTemplate = function (step) {
  return `<li>${step}</li>`  //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join('') // set the innerHTML


//activity 2

const letters = ['A', 'B', 'A']

function returnGrade(letter){
    if (letter === "A"){
        grade =  4
    }
    else if (letter === 'B'){
        grade =  3
    }
    return grade
}


const actualGrade = letters.map(returnGrade)
console.log(actualGrade)


//activity 3
let totalGrade = 0
function computeCGPA(accumulator, score) {
    return accumulator + score + totalGrade
}

const returedTotal  = actualGrade.reduce(computeCGPA)
let average = returedTotal / actualGrade.length
console.log(returedTotal)
console.log(average.toFixed(2))


// activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']


function fruitLength(fruit){
    return fruit.length > 6
}

const returnedFruits = fruits.filter(fruitLength)
console.log(returnedFruits)


//activity 5

const values = [12, 34, 21, 54]

let luckyNumber = 34;
// let result = -1
// for(let i =0; i <= values.length-1; i++){
//     if (values[i] === luckyNumber){
//       result = values.indexOf(luckyNumber)
//     }
    
    
// }
// console.log(result)

let luckyIndex = values.indexOf(luckyNumber)
console.log(luckyIndex)