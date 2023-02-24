const operate = (operator, x, y) => operator(x, y);
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const add = (x, y) => x + y;

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

const inputButtons = [
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

dot.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

clear.addEventListener("click", () => {
  display.textContent = "0";
  clear.textContent = "AC";
});

pm.addEventListener("click", () => {
  display.textContent = -display.textContent;
});

percent.addEventListener("click", () => {
  display.textContent = display.textContent / 100;
});

inputButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      !checkInitialState(display.textContent, button.textContent) &&
      display.textContent == "0"
    ) {
      display.textContent = button.textContent;
      clear.textContent = "C";
    } else if (!checkInitialState(display.textContent, button.textContent)) {
      display.textContent += button.textContent;
    } else {
      display.textContent = button.textContent;
      clear.textContent = "C";
    }
  });
});

function checkInitialState(displayContent, buttonContent) {
  let initialState = true;

  if (displayContent == "0" && buttonContent != "0") {
    initialState = false;
  } else if (displayContent == "0" && buttonContent == ".") {
    initialState = false;
  } else if (displayContent != "0") {
    initialState = false;
  }

  return initialState;
}
