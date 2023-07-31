add = (firstNumber, secondNumber) => firstNumber + secondNumber;
subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
divide = (firstNumber, secondNumber) => (secondNumber === 0 ? "You can't divide by 0, didn't you pass 4th grade?" : firstNumber / secondNumber);
operate = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case "+":
        return add(firstNumber, secondNumber);
        case "-":
        return subtract(firstNumber, secondNumber);
        case "x":
        return multiply(firstNumber, secondNumber);
        case "/":
        return divide(firstNumber, secondNumber);
    }
}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let sum = '';

operate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "x":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
};
// 4. Add event listeners to the buttons
const buttons = document.getElementById("buttons");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const addBut = document.getElementById("add");
const subBut = document.getElementById("subtract");
const mulBut = document.getElementById("multiply");
const divBut = document.getElementById("divide");

buttons.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    // first number is not empty and operator is empty
    }
    else if (firstNumber !== '' && e.target.id !== 'add' && e.target.id !== 'subtract' && e.target.id !== 'multiply' && e.target.id !== 'divide' && operator === '' && e.target.id !== 'equals') {
        const temp = convertIDtonumber(e.target.id);
        firstNumber = '' + firstNumber + temp;
        populateDisplay(firstNumber, secondNumber, operator);
        console.log('second', firstNumber)
        decimalDisable();
        disabledButtons();
        // first number is empty and operator is empty
    } else if (firstNumber === '' && e.target.id !== 'add' && e.target.id !== 'subtract' && e.target.id !== 'multiply' && e.target.id !== 'divide' && e.target.id !== 'equals') {
        firstNumber = convertIDtonumber(e.target.id);
        populateDisplay(firstNumber, secondNumber, operator);
        console.log('first', firstNumber)
        decimalDisable();
        disabledButtons();
        // first number is not empty and operator is empty
    } else if (operator === '' && (e.target.id === 'add' || e.target.id === 'subtract' || e.target.id === 'multiply' || e.target.id === 'divide')) {
        operator = convertIDtonumber(e.target.id);
        populateDisplay(firstNumber, secondNumber, operator);
        console.log('third',firstNumber, operator)
        decimalEnable();
        enableButtons();
    // first number is not empty and operator is not empty and second number is not empty
    } else if (operator !== '' && secondNumber !== '' && e.target.id !== 'add' && e.target.id !== 'subtract' && e.target.id !== 'multiply' && e.target.id !== 'divide' && e.target.id !== 'equals')  {
        const temp = convertIDtonumber(e.target.id);
        secondNumber = '' + secondNumber + temp;
        populateDisplay(firstNumber, secondNumber, operator);
        console.log('fifth', firstNumber, operator, secondNumber)
        decimalDisable();
        disabledButtons();
        // first number is not empty and operator is not empty and second number is empty
    } else if (operator !== '' && secondNumber === '' && e.target.id !== 'add' && e.target.id !== 'subtract' && e.target.id !== 'multiply' && e.target.id !== 'divide' && e.target.id !== 'equals') {
        secondNumber = convertIDtonumber(e.target.id);
        populateDisplay(firstNumber, secondNumber, operator);
        console.log('fourth', firstNumber, operator, secondNumber)
        decimalDisable();
        disabledButtons();
    // first number is not empty and operator is not empty and second number is not empty and equals is clicked
    } else if (e.target.id === 'equals' && firstNumber !== '' && secondNumber !== '' && operator !== '') {
        firstNumber = +firstNumber;
        secondNumber = +secondNumber;
        console.log('sixth', firstNumber, secondNumber, operator)
        sum = (operate(firstNumber, secondNumber, operator));
        sum = sum.toFixed(2)
        sum = +sum
        checkSum()
        console.log(sum)
        repopulateDisplay(firstNumber, secondNumber, operator);
        firstNumber = sum;
        secondNumber = '';
        operator = '';
        decimalDisable();
        enableButtons();
    } else {
        return;
    }
});


// 4.b Create a function that converts string ID to number
convertIDtonumber = (string) => {
    switch (string) {
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'zero':
            return 0;
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return 'x';
        case 'divide':
            return '/';
        case 'equals':
            return '=';
        case 'decimal':;
            return '.';
    }
};
// 5. Create function that populates the display
const previousSum = document.getElementById("previousSum");
const current = document.getElementById("currentSum");

populateDisplay = (firstNumber, secondNumber, operator) => {
    current.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}
repopulateDisplay = (firstNumber, secondNumber, operator) => {
    previousSum.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    current.textContent = `${sum}`;
}
// 6. Create function that clears the display
clear.addEventListener("click", (e) => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    previousSum.textContent = '';
    current.textContent = '';
    decimalEnable();
    enableButtons();
});
// 7. Create function that deletes the last character
del.addEventListener("click", (e) => {
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        populateDisplay(firstNumber, secondNumber, operator);
    } else if (operator !== '') {
        operator = '';
        populateDisplay(firstNumber, secondNumber, operator);
    } else if (firstNumber !== '') {
        firstNumber = firstNumber.slice(0, -1);
        populateDisplay(firstNumber, secondNumber, operator);
    }
});

function decimalDisable() {
    if(firstNumber.includes('.') && secondNumber === '') {
        decimal.disabled = true;
    } else if (secondNumber.includes('.')) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
}
function decimalEnable() {
    decimal.disabled = false;
}

function disabledButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (firstNumber.length >=10) {
            button.disabled = true;
            firstNumber = firstNumber.slice(0, -1);
            secondNumber
        }
        else if (secondNumber.length >=10) {
            button.disabled = true;
            secondNumber = secondNumber.slice(0, -1);
        }
    })
    clear.disabled = false;
    del.disabled = false;
    decimal.disabled = false;
    equals.disabled = false;
    addBut.disabled = false;
    subBut.disabled = false;
    mulBut.disabled = false;
    divBut.disabled = false;
}
function enableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = false;
    })
}
function checkSum() {
    if (sum.toString().length > 10) {
        sum = sum.toExponential(2);
    }
}