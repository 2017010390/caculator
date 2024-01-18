let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let frushCurNumber = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btnClear = document.querySelector('#btnClear');
const btnDelete = document.querySelector('#btnDelete');
const lastOperationScreen = document.querySelector('#lastOperationScreen');
const currentOperationScreen = document.querySelector('#currentOperationScreen');

btnClear.addEventListener('click', ()=>clear());

numberButtons.forEach((button)=>{
    button.addEventListener('click', () => displayCurNumber(button.textContent));
});

operatorButtons.forEach((button)=>{
    button.addEventListener('click', ()=> setOperation(button.textContent));
});

function displayCurNumber(number)
{
    if(currentOperationScreen.textContent === '0' || frushCurNumber)
        resetCurScreen();
    currentOperationScreen.textContent += number;
    frushCurNumber = false;
}

function resetCurScreen()
{
    currentOperationScreen.textContent = '';
}

function setOperation(operator)
{
    firstOperand = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`;
    frushCurNumber = true;
}

function clear()
{
    lastOperationScreen.textContent = '';
    currentOperationScreen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}