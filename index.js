
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculate();
        }
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput !== '' && currentInput !== '') {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                currentInput = (num1 / num2).toString();
                break;
        }
        currentOperator = '';
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}