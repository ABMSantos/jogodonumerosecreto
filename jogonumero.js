const numeroSecreto = 4;

function verificarChute() {
    const chute = Number(document.getElementById('chute').value);
    const mensagem = document.getElementById('mensagem');

    if (!chute) {
        mensagem.textContent = "Digite um número!";
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você descobriu o número secreto: ${numeroSecreto}`;
        document.body.style.backgroundColor = "#28a745"; // muda fundo pra verde
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor!";
    } else {
        mensagem.textContent = "O número secreto é maior!";
    }
}
