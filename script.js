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

let curOperation = "";

one.addEventListener("click", foo);
two.addEventListener("click", () => createNumber(2));
three.addEventListener("click", () => createNumber(3));
four.addEventListener("click", () => createNumber(4));
five.addEventListener("click", () => createNumber(5));
six.addEventListener("click", () => createNumber(6));
seven.addEventListener("click", () => createNumber(7));
eight.addEventListener("click", () => createNumber(8));
nine.addEventListener("click", () => createNumber(9));
zero.addEventListener("click", () => createNumber(0));



let num1 = 0;
let num2 = 0;

function foo() {
  console.log("works");
}

function createNumber(input) {
  if (curDigit === 1) {
    num1 = (num1 * 10) + input;
  }
  else if (curDigit === 2) {
    num2 = (num2 * 10) + input;
  }
}

addButton.addEventListener("click", switchDigit());

function switchDigit() {
  if (curDigit === 1) {
    curDigit = 2;
  }
  else {
    curDigit = 1;
  }
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
