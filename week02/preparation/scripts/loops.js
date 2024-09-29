myInfo = {
    name: "Brother T",
    photo: "../images/profile.png",
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

// let favoriteFood1 = document.createElement('li');
// favoriteFood1.innerHTML= myInfo.favoriteFoods[0]
// let favoriteFood2 = document.createElement('li');
// favoriteFood2.innerHTML= myInfo.favoriteFoods[1]
// let favoriteFood3 = document.createElement('li');
// favoriteFood3.innerHTML= myInfo.favoriteFoods[2]
// let favoriteFood4 = document.createElement('li');
// favoriteFood4.innerHTML= myInfo.favoriteFoods[3]
// let favoriteFood5 = document.createElement('li');
// favoriteFood5.innerHTML= myInfo.favoriteFoods[4]
// let myFavouritesFoods = document.querySelector('#favourites-foods')
// myFavouritesFoods.appendChild(favoriteFood1)
// myFavouritesFoods.appendChild(favoriteFood2)
// myFavouritesFoods.appendChild(favoriteFood3)
// myFavouritesFoods.appendChild(favoriteFood4)
// myFavouritesFoods.appendChild(favoriteFood5)



// for (let foods of myInfo.favoriteFoods){
//     let myFavouritesFoods = document.querySelector('#favourites-foods')
//     myFavouritesFoods.innerHTML +=`<li>${foods}</li>`
// }

// for (let i =0; i < myInfo.favoriteFoods.length - 1; i ++){
//     let myFavouritesFoods = document.querySelector('#favourites-foods')
//     myFavouritesFoods.innerHTML +=`<li>${myInfo.favoriteFoods[i]}</li>`
// }


// Using forEach
// myInfo.favoriteFoods.forEach(function (value) {
//     let myFavouritesFoods = document.querySelector('#favourites-foods')
//     myFavouritesFoods.innerHTML +=`<li>${value}</li>`
// });


// Using forEach
// function appendFood(value){
//     let myFavouritesFoods = document.querySelector('#favourites-foods')
//     myFavouritesFoods.innerHTML +=`<li>${value}</li>`
// }
// myInfo.favoriteFoods.forEach(appendFood)


// Using Map

function mapFood(value){
    let myFavFoods = document.querySelector('#favourites-foods')
    myFavFoods.innerHTML +=`<li>${value}</li>`
    return myFavFoods
}
myInfo.favoriteFoods.map(mapFood)