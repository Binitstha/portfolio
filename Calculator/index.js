const displayStatus = document.getElementById("screenId");
let currentExpression = ''

function appendDot(dot) {
    currentExpression += dot
    displayStatus.innerHTML = currentExpression
    displayStatus.value = currentExpression
}
function appendNumber(number) {
    currentExpression += number
    displayStatus.innerHTML = currentExpression
    displayStatus.value = currentExpression
}
function appendOperator(operator) {
    currentExpression += operator
    displayStatus.innerHTML = currentExpression
    displayStatus.value = currentExpression
}
function calculate() {
    try {
        displayStatus.value = eval(currentExpression)
        displayStatus.innerHTML = displayStatus.value
    }
    catch (error) {
        displayStatus.innerHTML = "Error"
    }
    currentExpression = ''
}
function clearScreen() {
    currentExpression = ''
    displayStatus.innerHTML = currentExpression
    displayStatus.value = currentExpression
}