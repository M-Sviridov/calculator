const DISPLAY_LENGTH = 8;

const operate = (operator, x, y) => operator(x, y);
const multiply = (x, y) => parseInt(x) * parseInt(y);
const subtract = (x, y) => parseInt(x) - parseInt(y);
const divide = (x, y) => parseFloat(x) / parseFloat(y);
const add = (x, y) => parseInt(x) + parseInt(y);

const display = document.querySelector(".display-text");

const clear = document.querySelector(".clear");
const pm = document.querySelector(".pm");
const percent = document.querySelector(".percent");

const divides = document.querySelector(".divides");
const times = document.querySelector(".times");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");

const digitButtons = [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
];

const operations = {
  divides: divide,
  times: multiply,
  minus: subtract,
  plus: add,
};

const operators = [divides, times, minus, plus];

let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let initialState = true;

dot.addEventListener("click", () => {
  if (!display.textContent.includes(".") && display.textContent.length != 7) {
    display.textContent += ".";
    initialState = false;
  }
});

clear.addEventListener("click", () => {
  reset();
});

pm.addEventListener("click", () => {
  display.textContent = -display.textContent;
});

percent.addEventListener("click", () => {
  display.textContent = display.textContent / 100;
});

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent.length == DISPLAY_LENGTH && firstOperator != null) {
      updateDisplay(button.textContent);
    } else if (display.textContent.length < DISPLAY_LENGTH) {
      updateDisplay(button.textContent);
    } else if (
      display.textContent.length >= DISPLAY_LENGTH &&
      firstNum != null
    ) {
      updateDisplay(button.textContent);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator == plus) {
      calculate("plus");
    } else if (operator == minus) {
      calculate("minus");
    } else if (operator == times) {
      calculate("times");
    } else {
      calculate("divides");
    }
  });
});

function updateDisplay(content) {
  if (initialState == true) {
    display.textContent = content;
    clear.textContent = "C";
    initialState = false;
  } else if (initialState == false && display.textContent == "0") {
    display.textContent = content;
  } else if (display.textContent.length == DISPLAY_LENGTH) {
    initialState = false;
  } else {
    display.textContent += content;
    initialState = false;
  }
}

function reset() {
  display.textContent = "0";
  clear.textContent = "AC";
  initialState = true;
  firstNum = null;
  secondNum = null;
  firstOperator = null;
  secondOperator = null;
}

function calculate(operator) {
  if (firstNum == null) {
    firstNum = display.textContent;
    firstOperator = operations[operator];
    initialState = true;
  } else {
    secondNum = display.textContent;
    secondOperator = operations[operator];
    display.textContent = operate(firstOperator, firstNum, secondNum);
    firstOperator = secondOperator;
    firstNum = display.textContent;
    initialState = true;
  }
}

equal.addEventListener("click", () => {
  if (firstOperator != null && secondNum == null) {
    secondNum = display.textContent;
    calculate(firstOperator);
  } else if (firstOperator != null) {
    calculate(firstOperator);
  }
  firstNum = display.textContent;
});
