function display(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;
    let result;

    try {
        result = eval(expression);
    } catch (error) {
        result = "Erro";
    }

    document.getElementById("display").value = result;
}