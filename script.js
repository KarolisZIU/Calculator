let a = "";
let operator = "";
let b = "";

function add(a, b) {
  const result = a + b;
  return result;
}
console.log(add(2, 3));

function subtract(a, b) {
  const result = a - b;
  return result;
}
console.log(subtract(3, 3));

function multiply(a, b) {
  const result = a * b;
  return result;
}
console.log(multiply(2, 3));

function divide(a, b) {
  const result = a / b;
  return result;
}
console.log(divide(10, 2));

const input = document.getElementById("inputBox");
const oneButton = document.getElementById("one");

oneButton.addEventListener("click", function () {
  input.textContent = input.textContent + "1";
});
