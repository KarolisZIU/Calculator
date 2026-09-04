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

// console.log(operate(10, 5, "/"));

const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");

function updateNumber(event) {
  const digit = event.target.textContent; // which number was clicked
  if (operator == "") {
    a = a + digit; // build up the variable
    display.textContent = a; // show it on screen\
  } else {
    b = b + digit;
    display.textContent = a + operator + b;
  }
}

digitButtons.forEach(function (button) {
  button.addEventListener("click", updateNumber);
});

function updateOperator(event) {
  const op = event.target.textContent;
  if (b !== "") {
    calculate();
  }
  operator = op;
  display.textContent = a + operator;
}

operatorButtons.forEach(function (button) {
  button.addEventListener("click", updateOperator);
});

function calculate() {
  const result = operate(parseInt(a), parseInt(b), operator);
  display.textContent = result;
  a = result;
  b = "";
  operator = "";
}

const equals = document.getElementById("equals");
equals.addEventListener("click", calculate);

function clearDisplay() {
  display.textContent = "";
  a = "";
  b = "";
  operator = "";
}

clearButton.addEventListener("click", clearDisplay);
