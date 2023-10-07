let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

function displayNums(num) {
    if(operator == ""){
        document.getElementById('screen').value += num;
        num1 += num;
    }
    else{
        document.getElementById('screen').value += num;
        num2 += num;
    }
}

function displaySign(sign){
    if(operator == ""){
        document.getElementById('screen').value += sign;
        operator = sign;
    }
}

function evaluateNums(){
    switch(operator){
        case 'x':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
    }
    document.getElementById('screen').value = result;
    num1 = result;
    num2 = "";
    operator = "";
    result = "";
}

function clearAll(){
    document.getElementById('screen').value = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
}
const numButtons = document.getElementsByClassName('num');
for(let numButton of numButtons){
    numButton.addEventListener('click', function () {displayNums(parseInt(numButton.innerHTML))})
}

const signButtons = document.getElementsByClassName('sign');
for(let signButton of signButtons){
    signButton.addEventListener('click', function () {displaySign(signButton.innerHTML)})
}

document.getElementById('clearButton').addEventListener('click', clearAll);
document.getElementById('equals').addEventListener('click', evaluateNums);