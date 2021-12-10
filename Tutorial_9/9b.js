const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        result.value = JSON.parse(request.responseText).result;
    }
};

function calculate() {
    result.value = "";
    request.open("POST", "http://localhost:3000/calculator", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({
        num1: num1.value,
        num2: num2.value,
        operation: operation.value
    }));
}