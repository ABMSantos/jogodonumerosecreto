let numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function criarConfete() {
    const confete = document.createElement("div");
    confete.className = "confete";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confete.style.width = "10px";
    confete.style.height = "10px";
    confete.style.top = "50px";
    confete.style.left = "50%";

    document.body.appendChild(confete);

    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    let x = 0, y = 0;

    function animar() {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed + 1; // gravidade
        confete.style.transform = `translate(${x}px, ${y}px) rotate(${x*5}deg)`;
        if (y < window.innerHeight) {
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

        for (let i = 0; i < 100; i++) criarConfete();

        // gera novo número secreto
        numeroSecreto = gerarNumeroSecreto();
        document.getElementById('chute').value = "";
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor!";
    } else {
        mensagem.textContent = "O número secreto é maior!";
    }
}

// evento do botão
document.getElementById('btnChutar').addEventListener('click', verificarChute);

// evento Enter
document.getElementById('chute').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        verificarChute();
    }
});





