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

let num1;
let num2;
let once = true;

function operate(operator, num1, num2) {

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '−') {
        return num1 - num2;
    } else if (operator === '×') {
        return num1 * num2;
    } else if (operator === '÷') {
        return num1 / num2;
    };
};

numPad.forEach(button => {
    button.addEventListener('click', (e) => {
        if (display.textContent === '0' && button.textContent === '0');
        else if (display.textContent === '0' && button.textContent !== '0') {
            display.textContent = button.textContent;
        } else if (num1 !== undefined && num2 !== undefined) {
            display.textContent = button.textContent;
            num2 = undefined;
        } else if (num1 !== undefined && once) {
            display.textContent = button.textContent;
            once = false;
        } else {
            display.textContent += button.textContent;
        }
        console.log(e.target);
    });

});

dotButton.addEventListener('click', () => {
    display.textContent += dotButton.textContent;
}, { once: true }
);

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 === undefined && num2 === undefined) {
            num1 = Number(display.textContent);
            console.log(num1 + ' num1');
            operator = button.textContent;
        } else if (num1 !== undefined && num2 === undefined) {
            num2 = Number(display.textContent);
            console.log(num2 + ' num2');
            display.textContent = operate(operator, num1, num2)
            num1 = operate(operator, num1, num2);
            operator = button.textContent;
        } else {
            operator = button.textContent;
        }
    });
});

acButton.addEventListener('click', () => {
    display.textContent = 0;
    num1 = undefined;
    num2 = undefined;
    once = true;
});

backspaceButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
});

plusMinusButton.addEventListener('click', () => {
    if (Number(display.textContent) > 0) {
        display.textContent = -Math.abs(Number(display.textContent));
    } else if (Number(display.textContent) < 0) {
        display.textContent = Math.abs(Number(display.textContent));
    }
});

equalButton.addEventListener('click', () => {
    num2 = Number(display.textContent);
    display.textContent = operate(operator, num1, num2)
    num1 = Number(display.textContent);
})