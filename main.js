const display = document.getElementById('display');
const dotButton = document.getElementById('dot-button');
const zeroButton = document.getElementById('zero-button');
const oneButton = document.getElementById('one-button');
const twoButton = document.getElementById('two-button');
const threeButton = document.getElementById('three-button');
const fourButton = document.getElementById('four-button');
const fiveButton = document.getElementById('five-button');
const sixButton = document.getElementById('six-button');
const sevenButton = document.getElementById('seven-button');
const eightButton = document.getElementById('eight-button');
const nineButton = document.getElementById('nine-button');
const acButton = document.getElementById('ac-button');
const plusMinusButton = document.getElementById('plus-minus-button');
const backspaceButton = document.getElementById('backspace-button');
const equalButton = document.getElementById('equal-button');
const additionButton = document.getElementById('addition-button');
const substractionButton = document.getElementById('substraction-button');
const multiplicationButton = document.getElementById('multiplication-button');
const divisionButton = document.getElementById('division-button');
const numPad = [zeroButton, oneButton, twoButton,
    threeButton, fourButton, fiveButton, sixButton, sevenButton,
    eightButton, nineButton];
const operators = [additionButton, substractionButton,
    multiplicationButton, divisionButton];

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let num1;
let num2;
let operator;
let finalValue;

function operate(operator, num1, num2) {
    // operator = prompt('Please enter an operator (+, -, *, /): ');

    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '−') {
        return substract(num1, num2);
    } else if (operator === '×') {
        return multiply(num1, num2);
    } else if (operator === '÷') {
        return divide(num1, num2);
    };
};
// } else {
// operator = prompt('Please enter a valid operator: ');
// }

numPad.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' && button.textContent === '0');
        else {
            display.textContent += button.textContent;
        }
    });
});

dotButton.addEventListener('click', () => {
    display.textContent += dotButton.textContent;
}, { once: true }
);

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 !== undefined && num2 !== undefined) {
            num2 = undefined;
            display.textContent = operate(operator, finalValue, num2);
        } else if (num1 === undefined) {
            num1 = Number(display.textContent);
            display.textContent = '';
            operator = button.textContent;
            console.log(operator);
        } else if (num2 === undefined) {
            num2 = Number(display.textContent);
            display.textContent = '';
            display.textContent = operate(operator, num1, num2);
            finalValue = display.textContent
        }
    });
});
