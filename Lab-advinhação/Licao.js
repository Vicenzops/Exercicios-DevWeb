function jogoAdvinha(){
    const numeroSorteado = Math.floor(Math.random()*100);
    let chute = parseInt(document.getElementById("chute").value);
    const status = document.getElementById('status');
    status.style.setProperty("background-color", "red");

    if (numeroSorteado == chute) {
        status.innerHTML =
            'Parabéns, você acertou!';
    } else if (numeroSorteado > chute) {
        status.innerHTML = 'O número sorteado é maior';
    } else if (numeroSorteado < chute) {
        status.innerHTML = 'O número sorteado é menor';
    }
}