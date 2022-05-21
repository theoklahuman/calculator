let a;
let b;
let displayed = "";


const display = document.querySelector("#display");
const digits = document.querySelector(".digits");
const buttons = document.querySelectorAll("button");
const operators = document.querySelector(".operators");
const equal = document.querySelector("#equal");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operator) {
    if (operator == add) {
        return add(a, b);
    } else if (operator == subtract) {
        return subtract(a, b)
    } else if (operator == multiply) {
        return multiply(a, b);
    } else if (operator == divide) {
        return divide(a, b);
    }
}


digits.addEventListener("click", function(event) {
    displayed += `${event.target.innerText}`;
    display.innerText = displayed;
})

operators.addEventListener("click", function(event) {
    display.innerText = "0";
    a = displayed;
    displayed = "";
})