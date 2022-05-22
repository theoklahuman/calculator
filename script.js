let firstNumber;
let secondNumber;
let operator;
let displayed = "";


const display = document.querySelector("#display");
const digits = document.querySelector(".digits");
const buttons = document.querySelectorAll("button");
const operators = document.querySelector(".operators");
const clear = document.querySelector("#clear");

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        return "ERROR!";
    } else {
        return firstNumber / secondNumber;
    }
    
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == add) {
        return add(firstNumber, secondNumber);
    } else if (operator == subtract) {
        return subtract(firstNumber, secondNumber)
    } else if (operator == multiply) {
        return multiply(firstNumber, secondNumber);
    } else if (operator == divide) {
        return divide(firstNumber, secondNumber);
    }
}


digits.addEventListener("click", function(event) {
    displayed += `${event.target.innerText}`;
    display.innerText = displayed;
})

operators.addEventListener("click", function(event) {
        if (event.target.id == "addition") {
            operator = add;
            firstNumber = +displayed;
            displayed = "";
        } else if (event.target.id == "subtraction") {
            operator = subtract;
            firstNumber = displayed;
            displayed = "";
        } else if (event.target.id == "multiplication") {
            operator = multiply;
            firstNumber = displayed;
            displayed = "";
        } else if (event.target.id == "division") {
            operator = divide;
            firstNumber = displayed;
            displayed = "";
        };
    })


    
equal.addEventListener("click", function(event) {
    secondNumber = +displayed;
    display.innerHTML = operate(operator, firstNumber, secondNumber);
    displayed = display.innerHTML;
    
})

function defaultDisplay() {
    display.innerText = "0";
    displayed = "";
}

clear.addEventListener("click", defaultDisplay);