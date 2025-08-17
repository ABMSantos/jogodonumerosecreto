// script.js

// Número secreto aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Pega os elementos do HTML
const input = document.getElementById("chute");
const botao = document.getElementById("botaoChutar");
const mensagem = document.getElementById("mensagem");

// Função principal do jogo
function verificarChute() {
    const chute = parseInt(input.value);

    // Se não for número válido
    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100!";
        mensagem.style.color = "red";
        return;
    }

    tentativas++;

    if (chute === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
        mensagem.style.color = "green";

        // Soltar confete quando acertar
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });

        // Desabilita input e botão
        input.disabled = true;
        botao.disabled = true;

    } else if (chute < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior!";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "O número secreto é menor!";
        mensagem.style.color = "orange";
    }

    input.value = "";
    input.focus();
}

// Evento do botão
botao.addEventListener("click", verificarChute);

// Evento para o Enter funcionar
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verificarChute();
    }
});
