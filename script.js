const display = document.querySelector("#display");
const resultScreen = document.querySelector("#result-screen");

const digits = document.querySelector(".digits");
const multiplybtn = document.querySelector("#multiplication");
const addbtn = document.querySelector("#addition");
const subtractbtn = document.querySelector("#subtraction");
const dividebtn = document.querySelector("#division");

let newArray = [];
let numberOnDisplay;

let defaultResult = 0;
let currentResult = defaultResult;

multiplybtn.addEventListener("click", function(event) {
  newArray.push(multiply, numberOnDisplay);
  numberOnDisplay = "";
  display.innerHTML = "";
});

// addbtn.addEventListener("click", function(event) {
//   newArray.push(add, numberOnDisplay);
//   numberOnDisplay = "";
//   display.innerHTML = "";
// })

function showResult(value) {
  resultScreen.innerHTML = value;
}

addbtn.addEventListener("click", add);

function add() {
  const enteredNumber = numberOnDisplay;
  // alert(enteredNumber);
  let initialResult = currentResult;
  // console.log("this is " + initialResult);
  currentResult += enteredNumber;
  // numberOnDisplay = "";
  display.innerHTML = "";
  // console.log(currentResult);
  initialResult = currentResult;
  // console.log("this is " + initialResult);
  showResult(initialResult);
  // console.log(resultScreen.innerHTML);
  initialResult = resultScreen.innerHTML;
  // alert(initialResult);
}

subtractbtn.addEventListener("click", function(event) {
  newArray.push(subtract, numberOnDisplay);
  numberOnDisplay = "";
  display.innerHTML = "";
})


dividebtn.addEventListener("click", function(event) {
  newArray.push(divide, numberOnDisplay);
  numberOnDisplay = "";
  display.innerHTML = "";
})

digits.addEventListener("click", function (event) {
  numberOnDisplay = +(display.innerHTML += `${event.target.innerHTML}`);
  numberOnDisplay = +numberOnDisplay;
  display.innerHTML = numberOnDisplay;
  return numberOnDisplay;
});

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function divide(num1, num2) {
    if (num2 == 0) {
    return "ERROR!";
}   else {
    let result = num1 / num2;
    return result;
}
}

function operate(operator, num1, num2) {
    if (operator == add) {
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2);
    } else if (operator == multiply) {
        return multiply(num1, num2);
    } else if (operator == divide) {
        return divide(num1, num2);
    }
}

equal.addEventListener("click", function(event) {
    newArray.push(numberOnDisplay);
    let operator = newArray[0];
    let num1 = newArray[1];    
    let num2 = newArray[2];
    // display.innerHTML = operate(operator, num1, num2);
    // currentResult = +display.innerHTML;
    let totalResult = operate(operator, num1, num2)
    showResult(totalResult);
    currentResult = totalResult;
    display.innerHTML = "";

})

function defaultDisplay() {
    display.innerText = "0";
    resultScreen.innerHTML = "";
    currentResult = 0;
    newArray.length = 0;
}

clear.addEventListener("click", defaultDisplay);
