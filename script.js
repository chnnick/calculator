const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const calculateButton = document.querySelector("#calculate");
const display = document.querySelector("#output");

/*
  THERE ARE ONLY 2 DIGITS, 1 and 2
  a + b = c
  where a: digit = 1, b: digit = 2
*/
let curDigit = 1;

one.addEventListener("click", () => createNumber(1, curDigit));
two.addEventListener("click", () => createNumber(2, curDigit));
three.addEventListener("click", () => createNumber(3, curDigit));
four.addEventListener("click", () => createNumber(4, curDigit));
five.addEventListener("click", () => createNumber(5, curDigit));
six.addEventListener("click", () => createNumber(6, curDigit));
seven.addEventListener("click", () => createNumber(7, curDigit));
eight.addEventListener("click", () => createNumber(8, curDigit));
nine.addEventListener("click", () => createNumber(9, curDigit));
zero.addEventListener("click", () => createNumber(0, curDigit));


let num1 = 0;
let num2 = 0;

function createNumber(input, digit) {
  curNum = (curNum * 10) + input;
}

function operate(num1, num2, func) {
  switch (func) {
    case add : {
      return add(num1, num2);
    }
    case subtract : {
      return subtract(num1, num2);
    }
    case multiply : {
      return multiply(num1, num2);
    }
    case divide : {
      return divide(num1, num2);
    }
  }
}