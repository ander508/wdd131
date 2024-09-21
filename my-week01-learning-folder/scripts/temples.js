let temples = ["Aba", "Lagos", "Abuja"];
listitems = "";

for (const temple of temples) {
  listitems = `${listitems}  <li>${temple}</li>`;
}

const items = document.querySelector(".list");
items.innerHTML = listitems;
