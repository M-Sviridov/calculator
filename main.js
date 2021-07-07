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
let oneDot = true;

function operate(operator, num1, num2) {

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '−') {
        return num1 - num2;
    } else if (operator === '×') {
        return num1 * num2;
    } else if (operator === '÷' && num2 === 0) {
        alert('Division by zero impossible.')
        return reset();
    } else if (operator === '÷') {
        return num1 / num2;
    }
};

// Deletes one number from the display
function deleteNumber() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

// Adds a decimal point and makes sure only one can be present
function addDot() {
    if (display.textContent.indexOf('.') > -1);
    else {
        display.textContent += '.';
    }
}

// Resets the calculator and all the data
function reset() {
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    once = true;
}

// Turns a positive number into a negative, and vice versa
function positiveNegative() {
    if (Number(display.textContent) > 0) {
        display.textContent = -Math.abs(Number(display.textContent));
    } else if (Number(display.textContent) < 0) {
        display.textContent = Math.abs(Number(display.textContent));
    }
}

// Calling the operate() function, setting variables for next operation
function equal() {
    if (num1 === undefined);
    else if (num1 !== undefined) {
        num2 = Number(display.textContent);
        display.textContent = operate(operator, num1, num2);
        num1 = undefined;
        num2 = undefined;
        once = true;
        if (display.textContent === '') {
            display.textContent = '0';
        }
    }
}

// Adds a single number to the calculator display
function addNumber(button) {
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
}

// Calls the operate() function with the chosen operator
function operation(button) {
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
}

numPad.forEach(button => {
    button.addEventListener('click', (e) => {
        addNumber(button);
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        operation(button);
    });
});

dotButton.addEventListener('click', () => {
    addDot();
});

acButton.addEventListener('click', () => {
    reset();
});

backspaceButton.addEventListener('click', () => {
    deleteNumber();
});

plusMinusButton.addEventListener('click', () => {
    positiveNegative();
});

equalButton.addEventListener('click', () => {
    equal();
});

// Adds keyboard support
window.addEventListener('keydown', (e) => {
    console.log(e);
    switch (true) {
        case e.key === 'Backspace':
            deleteNumber();
            break;

        case e.key === '.':
            addDot();
            break;

        case e.key === 'Escape':
            reset();
            break;

        case e.key === 'Alt':
            positiveNegative();
            break;

        case e.key === 'Enter' || e.key === '=':
            equal();
            break;

        case e.key in numPad:
            addNumber(numPad[e.key]);
            break;

        case e.key === '+':
            operation(operators[0]);
            break;

        case e.key === '-':
            operation(operators[1]);
            break;

        case e.key === '*':
            operation(operators[2]);
            break;

        case e.key === '/':
            operation(operators[3]);
            break;
    }
})