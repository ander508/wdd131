// let person = {
//     name: "Antonia Francesca",
//     age: 30,
//     profession: "Software Engineer",
//     hobbies: ["reading", "playing guitar", "hiking"],
//     address: {
//       street: "123 Camino Real",
//       city: "Santa Rosa",
//       country: "Honduras"
//     },
//     isEmployed: true,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   };
// console.log(person.greet())


// console.log('test')

// let names = ['Lactated Ringers','levothyroxine','rosuvastatin','albuterol','esomeprazole']
// let amounts = ['100L','2000ct','1500ct','1325ct','23145ct']
// let codes = ['13ab7','at342','gr5423','iuy6532','mnb78932']
// let expDateDate = ['12/30/2029','03/18/2021','09/01/2020','01/01/2023','10/01/2021']

// for (let i = 0; i <= names.length - 1; i++){
//     console.log(`${names[i]} ${amounts[i]} ${codes[i]} ${expDateDate[i]}`)
// }


// let medications = [
// 	['Lactated Ringers','levothyroxine','rosuvastatin','albuterol','esomeprazole'],
// 	['100L','2000ct','1500ct','1325ct','23145ct'],
// 	['13ab7','at342','gr5423','iuy6532','mnb78932'],
// 	['12/30/2029','03/18/2021','09/01/2020','01/01/2023','10/01/2021']
// ]

// let MedNameIndex = 0 
// console.log(medications[MedNameIndex][1])

// let medName = medications[0]
// let medAmount = medications[1]
// let medCode = medications[2]
// let medBbDate = medications[3]

// for (i = 0; i <= medName.length -1; i++){
//     console.log(`${medName[i]} - ${medAmount[i]} - ${medCode[i]} - ${medBbDate[i]}`)
// }

// let lactatedRingers = {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'}
// let levothyroxine = {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'}
// let rosuvastatin = {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'}
// let albuterol = {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'}
// let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}

// console.log(rosuvastatin.amount)
// console.log(rosuvastatin['amount'])


// let medications = {
// 	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
// 	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
// 	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
// 	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
// 	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
// }

// for (med in medications){
//     console.log(med)
// }
// console.log(medications.Albuterol.expDate)
// console.log(medications["Lactated Ringers"].expDate)

// console.log(medications['Albuterol']['expDate'])


const person = {
    name: ['anderson', 'offor'],
    age: 43,
    bio: function (){
        console.log(`I am ${this.name[0]} and ${this.age}`);
    }
}

console.log(person.bio())