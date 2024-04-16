let fullOperation = "";
let operator = "";
var number1 = 0;
var number2 = 0;
var res = 0;

function number(value) {
    if(value == "C"){
        clear();
    } else if (value == "="){
        result();
    } else if (value == "+" || value == "-" || value == "*" || value == "/" || value == "^"){
        operator = value;
        operation();
    }else {
        console.log(value);
        fullOperation += value;
        rendernumber();
    }
}

function operation() {
    number1 = Number(fullOperation);
    fullOperation = "";
    rendernumber();
}

function result() {
    number2 = Number(fullOperation);
    if(operator == "+"){
        res != 0 ? res += number2 : res = number1 + number2;
    } else if(operator == "-"){
        res != 0 ? res -= number2 : res = number1 - number2;
    } else if(operator == "*"){
        res != 0 ? res *= number2 : res = number1 * number2;
    } else if(operator == "/"){
        res != 0 ? res /= number2 : res = number1 / number2;
    } else if(operator == "^"){
        res != 0 ? res **= number2 : res = number1 ** number2;
    }
    renderResult();
}

function clear() {
    renderHistorial();
    fullOperation = "";
    operator = "";
    number1 = 0;
    number2 = 0;
    res = 0;
    rendernumber();
}

function rendernumber() {
    document.getElementById("result").innerHTML = fullOperation;
}

function renderResult() {
    document.getElementById("result").innerHTML = res;
}

function renderHistorial() {
    var newSpan = document.createElement("span");
    newSpan.textContent = res;
    var historialContainer = document.getElementById("historial");
    historialContainer.appendChild(newSpan);
    historialContainer.appendChild(document.createElement("br"));
}

