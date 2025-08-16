let numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
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

        // Efeito confete explosivo
        for (let i = 0; i < 100; i++) {
            const confete = document.createElement("div");
            confete.className = "confete";
            const size = Math.random() * 10 + 5;
            confete.style.width = `${size}px`;
            confete.style.height = `${size}px`;
            confete.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
            confete.style.left = `${Math.random() * window.innerWidth}px`;
            confete.style.top = `${Math.random() * 50}px`; // Explode do topo
            confete.style.transform = `rotate(${Math.random()*360}deg)`;
            confete.style.animation = `cair ${2 + Math.random()*2}s ease-out forwards`;
            document.body.appendChild(confete);
            setTimeout(() => confete.remove(), 3000);
        }

        // Novo número secreto para próxima rodada
        numeroSecreto = gerarNumeroSecreto();

    } else if (chute > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor!";
    } else {
        mensagem.textContent = "O número secreto é maior!";
    }
}

// Eventos: clique e Enter
document.getElementById('botaoChutar').addEventListener('click', verificarChute);
document.getElementById('chute').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') verificarChute();
});


// botão
document.getElementById('btnChutar').addEventListener('click', verificarChute);

// permitir Enter
document.getElementById('chute').addEventListener('keyup', function(event) {
    if (event.key === "Enter") verificarChute();
});

