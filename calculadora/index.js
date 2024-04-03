let fullOperation = "";

function number(value) {
    console.log(value);
    fullOperation += value;
    rendernumber();
    value == "=" ? operation() : "";
}

function operation(op) {
    fullOperation = ""
    console.log("Resultado");
}

function rendernumber() {
    document.getElementById("result").innerHTML = fullOperation;
}