alert('Boas-vindas ao jogo do número secreto!');

const numeroSecreto = 4;

function jogar() {
    let acertou = false;

    while (!acertou) {
        const chute = Number(prompt('Escolha um número entre 1 e 10'));

        if (isNaN(chute)) {
            alert('Por favor, digite um número válido!');
            continue;
        }

        if (chute === numeroSecreto) {
            alert(`Parabéns! Você descobriu o número secreto: ${numeroSecreto}`);
            acertou = true;
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

jogar();
