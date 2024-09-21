// let resources = [
//   "Dev to Community",
//   "Smashing Magazine",
//   "CSS Trick",
//   "W3 School",
//   "Udemy",
//   "Lorem Picsum Image Placeholder",
// ];
// const links = [
//   "https://dev.to/",
//   "https://www.smashingmagazine.com/",
//   "https://css-tricks.com/",
//   "https://www.w3schools.com/",
//   "https://udemy.com",
//   "https://picsum.photos/",
// ];

// let listItems = "";

// for (const resource in resources) {
//   listItems = `${listItems} <li class="margin"><a href="${links[resource]}">${resources[resource]}</a></li>`;
// }
// let resourcesList = document.querySelector("#dev-resource");
// resourcesList.innerHTML = listItems;

const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

// const day = new Date().getDate();
// const month = new Date().getMonth();
// const year = new Date().getFullYear();
// const hour = new Date().getHours();
// const minutes = new Date().getMinutes();
// const seconds = new Date().getSeconds();

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = oLastModif.toLocaleString();
const clock = document.querySelector(".clock");

// function updateClock() {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();

//   let hours;
//   let minutes;
//   let seconds;
//   if (hour < 10) {
//     hours = "0" + hour;
//   } else {
//     hours = hour;
//   }
//   if (minute < 10) {
//     minutes = "0" + minute;
//   } else {
//     minutes = minute;
//   }
//   if (second < 10) {
//     seconds = "0" + second;
//   } else {
//     seconds = second;
//   }
//   clock.innerHTML = `Time: ${hour}:${minutes}:${seconds}`;
// }

// updateClock();
// setInterval(updateClock, 1000);
