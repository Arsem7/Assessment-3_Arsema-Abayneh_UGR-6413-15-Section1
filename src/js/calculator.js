// Selectors for the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
let currentInput = "";
let previousInput = "";
let operator = ""; 
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (button.classList.contains("operator") && value !== "=") {
            if (currentInput) {
                if (previousInput && operator) {
                    calculate(); 
                }
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else if (value !== "=") {
            currentInput += value;
        }
        updateDisplay(currentInput || previousInput || "0");
    });
});
equalsButton.addEventListener("click", () => {
    if (previousInput && currentInput && operator) {
        calculate();
        updateDisplay(currentInput);
        previousInput = "";
        operator = "";
    }
});
clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
});
function updateDisplay(value) {
    display.value = value;}
function calculate() {
const previous = parseFloat(previousInput);
const current = parseFloat(currentInput);
    switch (operator) {
        case "+":
            currentInput = (previous + current).toString();
            break;
        case "-":
            currentInput = (previous- current).toString();
            break;
        case "*":
            currentInput = (previous * current).toString();
            break;
        case "/":
            currentInput = current !== 0 ? (previous / current).toString() : "Error";
            break;
        default:
            return;
    }
}
