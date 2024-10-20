const button = document.querySelector('button')
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav a')

menu.addEventListener('click', function(){
    if( menu.innerHTML === '☰'){
        menu.innerHTML = 'X'
        nav.classList.remove('hide')
        nav.classList.add('open')
    }
    else{
        menu.innerHTML = '☰'
        nav.classList.remove('open')
        nav.classList.add('hide')
    }
})
const heading = document.querySelector('h2')
navLinks.forEach(function (link){
    link.addEventListener('click', function (event){
        event.preventDefault(); 
        heading.textContent = link.textContent
    })
})
    
const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${oLastModif.toLocaleString()}`;




const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "images/aba-nigeria-temple.webp"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/manti-temple.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/payson-utah-temple.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/yigo_guam_temple.webp"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/washington_dc_temple.webp"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/lima-peru-temple.webp"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/mexico-city-temple.webp"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "images/accra-ghana-temple.webp"
      },
      {
        templeName: "Rome Italy Temple",
        location: "Via di Settebagni, Rome",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
        "images/rome-italy-temple.webp"
      },
      {
        templeName: "Manaus Brazil Temple",
        location: "Manaus-AM, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:
        "images/Manaus-Brazil-Temple.webp"
      }
  ];






function sectionTemplate(temples){
    document.querySelector('.temple').innerHTML = "" 
    return `<div class ="card">
      <h3>${temples.templeName}</h3>
      
      <div class="space">
      <p>LOCATION: ${temples.location}</p>
      <p>DEDICATION: ${temples.dedicated}</p>
      <p>SIZE: ${temples.area} sq ft</p>
      </div>
      <img src=${temples.imageUrl} alt="${temples.location} Temple" width=400 height = 250 loading="lazy">
    </div>`
    
}


function renderSections(temple){
    const html = temple.map(sectionTemplate)
    const addTemple = document.querySelector('.temple')
    addTemple.innerHTML = html.join('')

}
renderSections(temples)





const home = document.querySelector(".home")


home.addEventListener('click', () => {
  renderSections(temples);
});

const old = document.querySelector(".old")

function oldTemples(temple){
  const year = parseInt(temple.dedicated,10)
  return year < 1900
}

old.addEventListener('click', () => {
  renderSections(temples.filter(oldTemples));
});


const newTemple = document.querySelector(".new")

function newTemples(temple){
  const year = parseInt(temple.dedicated,10)
  return year > 2000
}

newTemple.addEventListener('click', () => {
  renderSections(temples.filter(newTemples));
});

const large = document.querySelector('.large')
function largeTemples(temple){
  return temple.area >90000
}

large.addEventListener('click', ()=>{
  renderSections(temples.filter(largeTemples))
})

const small = document.querySelector('.small')
function smallArea(temple){
  return temple.area < 10000
}
small.addEventListener('click', ()=>{
  renderSections(temples.filter(smallArea))
})

