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
    document.body.style.backgroundColor = "#28a745";

    // efeito confete
    for (let i = 0; i < 100; i++) {
        const confete = document.createElement("div");
        confete.className = "confete";
        confete.style.left = Math.random() * window.innerWidth + "px";
        confete.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        document.body.appendChild(confete);

        setTimeout(() => confete.remove(), 3000); // remove depois de 3s
    }
}

