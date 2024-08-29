const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");
const display = document.querySelector("#display");

oneButton.addEventListener("click", () => createNumber(1));
twoButton.addEventListener("click", () => createNumber(2));
threeButton.addEventListener("click", () => createNumber(3));
fourButton.addEventListener("click", () => createNumber(4));
fiveButton.addEventListener("click", () => createNumber(5));
sixButton.addEventListener("click", () => createNumber(6));
sevenButton.addEventListener("click", () => createNumber(7));
eightButton.addEventListener("click", () => createNumber(8));
nineButton.addEventListener("click", () => createNumber(9));
zeroButton.addEventListener("click", () => createNumber(0));

/*
  THERE ARE ONLY 2 DIGITS, 1 and 2
  a + b = c
  where a: digit = 1, b: digit = 2
*/
let curDigit = 1;

/*
  Calculated represents if you have run a calculation, and if so, 
  your first number will be locked, and you can still do operation with it
  BUT, if you type a different number you will reset
*/
let calculated = false;

let curOperation = null;

let num1 = null;
let num2 = null;

function createNumber(input) {
  if (!calculated) {
    if (curDigit === 1) {
      if (num1 === null) {
        num1 = 0;
      }
      num1 = (num1 * 10) + input;
      display.innerText = num1;
    }
    else if (curDigit === 2) {
      if (num2 === null) {
        num2 = 0;
      }
      num2 = (num2 * 10) + input;
      display.innerText = num2;
    }
    else {
      display.innerText = "ERROR";
    }
  }
  else {
    calculated = false;
    num1 = (num1 * 10) + input;
    display.innerText = num1;
    curDigit = 1;
  }
}

addButton.addEventListener("click", () => setOperation("+"));
subtractButton.addEventListener("click", () => setOperation("-"));
multiplyButton.addEventListener("click", () => setOperation("*"));
divideButton.addEventListener("click", () => setOperation("/"));

// sets the operation + - / * and switches digit to be put in num2
function setOperation(operation) {
  calculated = false;
  display.innerText = operation;
  curOperation = operation;
  switchDigit();
}

function switchDigit() {
  if (curDigit === 1) {
    curDigit = 2;
  }
  else {
    curDigit = 1;
  }
}

calculateButton.addEventListener("click", calculate);

function calculate() {
  // if no operation found, just return current num1
  if (curOperation === null) {
    display.innerText = num1;
  }
  else if (num2 === null) {
    display.innerText = num1;
  }
  else {
    const calculation = operate(num1, num2, curOperation);
    num2 = null;
    curOperation = null;
    num1 = calculation;
    display.innerText = calculation;
    calculated = true;
  }
}

clearButton.addEventListener("click", clear);

// clears all fields
function clear() {
  display.innerText = "";
  num1 = null;
  num2 = null;
  curOperation = null;
  curDigit = 1;
}

//TODO: test
function operate(num1, num2, func) {
  switch (func) {
    case "+" : {
      return add(num1, num2);
    }
    case "-" : {
      return subtract(num1, num2);
    }
    case "*" : {
      return multiply(num1, num2);
    }
    case "/" : {
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
  if (b === 0) {
    return "ERROR, dividing by zero";
  }
  return a / b;
};
