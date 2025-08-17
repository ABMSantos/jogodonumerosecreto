let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarChute() {
  const chute = parseInt(document.getElementById("chute").value);
  const resultado = document.getElementById("resultado");
  tentativas++;

  if (isNaN(chute) || chute < 1 || chute > 10) {
    resultado.textContent = "⚠️ Digite um número válido entre 1 e 10!";
    resultado.style.color = "yellow";
    return;
  }

  if (chute === numeroSecreto) {
    resultado.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`;
    resultado.style.color = "lightgreen";

    // Confete 🎊
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

  } else if (chute < numeroSecreto) {
    resultado.textContent = "⬆️ O número secreto é MAIOR!";
    resultado.style.color = "orange";
  } else {
    resultado.textContent = "⬇️ O número secreto é MENOR!";
    resultado.style.color = "orange";
  }
}

// Permite jogar com ENTER
document.getElementById("chute").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    verificarChute();
  }
});
