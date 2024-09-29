myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };


// const foodElement = document.querySelector('#favorite-foods')
const placeElement = document.querySelector('#places-lived')

// function myFood(food){
//     return `<li>${food}</li>`
// }

// function myPlace(place){
//     return `<dt>${place.place}</dt><dd>: ${place.length}</dd>`
// }

//  function output(list, callbackFunction){
//     return list.map(callbackFunction)
// }

// // output(myInfo.favoriteFoods, myFood)


// foodElement.innerHTML = output(myInfo.favoriteFoods, myFood).join(' ')
// placeElement.innerHTML = output(myInfo.placesLived, myPlace).join(' ')


// myInfo.placesLived.forEach(function (item) {
//     let myfood = document.querySelector('#places-lived')
//     myfood.innerHTML +=`<dt>${item.place}</dt><dt>${item.length}</dt>`
// });