const one = 1;
const two = "2";
let result = one + two;
output("#1", result);

result = one + parseInt(two);
output("#2", result);

const three = 3;
const four = 4;
result = three + four;
output("#3", result);

result = one * two;
output("#4", result);

const five = "e";
result = one + five;
output("#5", result);

const six = "e";
result = one * six;
output("#5", result);

function output(lineNumber, answer) {
  const resultOne = document.querySelector(".resultOne");
  resultOne.innerHTML += `<p>${lineNumber} ${answer}`;
}
