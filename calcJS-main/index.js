let num1 = 8
let num2 = 6

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let result = document.getElementById("res-el");

function add() {
    let sum = num1 + num2;
    result.textContent = "Result: " + sum;
}

function subtract() {
    let diff = num1 - num2;
    result.textContent = "Result: " + diff;
}

function divide() {
    let quo = num1 / num2;
    result.textContent = "Result: " + quo;
}

function multiply() {
    let pro = num1 * num2;
    result.textContent = "Result: " + pro;
}

document.getElementsByTagName('button')[0].addEventListener('click', add);
document.getElementsByTagName('button')[1].addEventListener('click', subtract);
document.getElementsByTagName('button')[2].addEventListener('click', divide);
document.getElementsByTagName('button')[3].addEventListener('click', multiply);