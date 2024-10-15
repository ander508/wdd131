// const array1 = [1, 2, 3, 4, 5];

// const total  = 0
// function sum(accum,  num){
//     return accum + num + total
// }


// console.log(array1.reduce(sum))


let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

function nameLength(name){
    return name.length
}

const lengthOfName = names.map(nameLength)
console.log(lengthOfName)

let total = 0
function sum(accum, num){
    return accum + num + total
}

const totalSum = lengthOfName.reduce(sum)

requireLength = lengthOfName.length
let average = totalSum/requireLength
console.log(average)

console.log(names.reduce((total, name) => total + name.length, 0) / names.length)