const btn = document.querySelector("#btn");
const headerA = document.querySelector("#headerA");

let count = 1;

// btn.addEventListener("click", function () {
//   btn.innerHTML = "Try Again";
//   headerA.textContent = `${count} clicks so far`;
//   count = count + 1;
// });

btn.onclick = function () {
  btn.innerHTML = "Try Again";
  headerA.innerHTML = `${count} clicks so far`;
  count = count + 1;
};
