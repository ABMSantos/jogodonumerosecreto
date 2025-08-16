let numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificarChute() {
    const chute = Number(document.getElementById('chute').value);
    const mensagem = document.getElementById('mensagem');

    if (!chute) {
        mensagem.textContent = "Digite um número!";
        return;
    }

if (chute === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você descobriu o número secreto: ${numeroSecreto}`;
    document.body.style.backgroundColor = "#28a745";

    // cria confete
    for (let i = 0; i < 100; i++) {
    const confete = document.createElement("div");
    confete.className = "confete";
    confete.style.left = "50%"; // explosão do centro
    confete.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;

    // posição final aleatória
    const x = (Math.random() - 0.5) * 500 + "px"; // para esquerda/direita
    const y = Math.random() * 500 + "px"; // para baixo
    confete.style.setProperty("--x", x);
    confete.style.setProperty("--y", y);

    document.body.appendChild(confete);
    setTimeout(() => confete.remove(), 3000);
}





