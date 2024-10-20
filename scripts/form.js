const currentYear = new Date().getFullYear();
const thisYear = document.querySelector("#currentYear");
thisYear.innerHTML = currentYear;

const lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${oLastModif.toLocaleString()}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function optionTemplate(product){
    return `
    <option class="hover" value="${product.name}" id="${product.id}">${product.name}</option>
  `;
}


function displayOption(product){
    const html = products.map(optionTemplate).join('');
    document.getElementById('product-name').innerHTML += html;
   
    
}
displayOption(products)


