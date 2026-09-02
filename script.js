let a = "";
let operator = "";
let b = "";
// add function
function add(a, b) {
  const result = a + b;
  return result;
}
//console.log(add(2, 3));
// subract function
function subtract(a, b) {
  const result = a - b;
  return result;
}
//console.log(subtract(3, 3));
// multiply function
function multiply(a, b) {
  const result = a * b;
  return result;
}
//console.log(multiply(2, 3));
// divide function
function divide(a, b) {
  const result = a / b;
  return result;
}
// console.log(divide(10, 2));
// operate function
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

console.log(operate(10, 5, "/"));

//const input = document.getElementById("inputBox");
//const oneButton = document.getElementById("one");

//oneButton.addEventListener("click", function () {
//input.textContent = input.textContent + "1";
//});
