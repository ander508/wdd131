// Get the element to display the visit count
const visitsDisplay = document.querySelector(".visits");



// Get the number of visits from localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numVisits !== 0){
    visitsDisplay.textContent =`${numVisits}`
}
else {
    visitsDisplay.textContent = `No review yet`
}

numVisits ++

localStorage.setItem("visits-ls",  numVisits)


