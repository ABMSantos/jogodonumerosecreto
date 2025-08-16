let numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

// função que cria confete
function criarConfete() {
    const confete = document.createElement("div");
    confete.className = "confete";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confete.style.left = Math.random() * window.innerWidth + "px";
    confete.style.top = "0px";

    document.body.appendChild(confete);

    const velocidadeX = (Math.random() - 0.5) * 10;
    const velocidadeY = Math.random() * 10 + 2;

    let posX = parseFloat(confete.style.left);
    let posY = 0;

    function animar() {
        posX += velocidadeX;
        posY += velocidadeY;
        confete.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX*5}deg)`;
        if (posY < window.innerHeight) {
            requestAnimationFrame(animar);
        } else {
            confete.remove();
        }
    }
    animar();
}

function verificarChute() {
    const chute = Number(document.getElementById('chute').value);
    const mensagem = document.getElementById('mensagem');

    if (!chute || chute < 1 || chute > 10) {
        mensagem.textContent = "Digite um número válido entre 1 e 10!";
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você descobriu o número secreto: ${numeroSecreto}`;
        document.body.style.backgroundColor = "#28a745";

        // explodir confete
        for (let i = 0; i < 100; i++) criarConfete();

        numeroSecreto = gerarNumeroSecreto();
        document.getElementById('chute').value = "";
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor!";
    } else {
        mensagem.textContent = "O número secreto é maior!";
    }
}

// botão
document.getElementById('btnChutar').addEventListener('click', verificarChute);

// permitir Enter
document.getElementById('chute').addEventListener('keyup', function(event) {
    if (event.key === "Enter") verificarChute();
});
