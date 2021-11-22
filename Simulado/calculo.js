function calcular() {
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var elemResult = document.getElementById("resultado");

    if (elemResult.textContent === undefined) {
        elemResult.textContent = "O resultado é " + String(num1 + num2) + ".";
    }
    else {
        elemResult.innerText = "O resultado é " + String(num1 + num2) + ".";
    }
}