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
let firstNumber = 0;
let operator = 0;
let secondNumber = 0;
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

buttons.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    } else if (operator === 0 && e.target.id !== 'add' && e.target.id !== 'subtract' && e.target.id !== 'multiply' && e.target.id !== 'divide') {
        console.log('first')
        firstNumber = convertIDtonumber(e.target.id);
    } else if (operator === 0 && (e.target.id === 'add' || e.target.id === 'subtract' || e.target.id === 'multiply' || e.target.id === 'divide')) {
        console.log('operator')
        operator = convertIDtonumber(e.target.id);
    } else if (operator !== 0 && secondNumber === 0) {
        secondNumber = convertIDtonumber(e.target.id);
        console.log('second')
    } else if (e.target.id === 'equals') {
        console.log(operate(firstNumber, secondNumber, operator));
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
    }
};
// 5. Create function that populates the display
// 6. Create function that clears the display
// 7. Create function that deletes the last character
