let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(num1, num2) {
    operator = prompt('Please enter an operator (+, -, *, /): ');

    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return substract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        operator = prompt('Please enter a valid operator: ');
    }
};
