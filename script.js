const display = document.querySelector("#display");
const resultScreen = document.querySelector("#result-screen");

const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");

let operator;
let result;
let newArray = [];
let activeOperator = [];
let numberOnDisplay;

digits.addEventListener("click", function (event) {
  numberOnDisplay = +(display.innerHTML += `${event.target.innerHTML}`);
  display.innerHTML = numberOnDisplay;
  return numberOnDisplay;
});


operators.addEventListener("click", function(event) {
  operator = event.target.id;
  newArray.push(numberOnDisplay);
  numberOnDisplay = 0;
  display.innerHTML = "";

  if (newArray.length === 1) {
    activeOperator.push(operator);
  } else {
    let previousNumber = newArray[0];
    let whatToOperate = activeOperator[0];
    let currentNumber = newArray[1];
    result = operate(whatToOperate, previousNumber, currentNumber);
    resultScreen.innerHTML = result;
    newArray.length = 0;
    newArray.push(result);
  activeOperator.length = 0;
  activeOperator.push(operator);
  }
  
});

function operate(operator, num1, num2) {
  if (operator === "add") {
    return add(num1, num2);
  } else if (operator == "subtract") {
    return subtract(num1, num2);
  } else if (operator == "multiply") {
    return multiply(num1, num2);
  } else if (operator == "divide") {
    return divide(num1, num2);
  }
}

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}

function divide(num1, num2) {
  if (num2 == 0) {
    return "ERROR!";
  } else {
  result = num1 / num2;
    return result;
  }
}

function clearDisplayScreen() {
  display.innerText = "0";
  resultScreen.innerHTML = "";
  newArray.length = 0;
  activeOperator.length = 0;
}

clear.addEventListener("click", clearDisplayScreen);


equal.addEventListener("click", function (event) {
  newArray.push(numberOnDisplay);
  if (newArray.length <= 1 ) {
    clearDisplayScreen();
    return;
  } else {
    let previousNumber = newArray[0];
    let whatToOperate = activeOperator[0];
    let currentNumber = newArray[1];
    result = operate(whatToOperate, previousNumber, currentNumber);
    resultScreen.innerHTML = result;
}
})