let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibirMensagemNoConsole() {
    console.log("O botão foi clicado");
}

function exibirAlerta() {
    alert("Eu amo JS");
}

function perguntarNomeDaCidadeDoBrasil() {
    let cidade = prompt("Digite o nome de uma cidade brasileira:");

    while (cidade.length == 0) {
        alert("Digite um cidade do Brasil!!");
        cidade = prompt("Digite o nome de uma cidade brasileira:");
    }

    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somarNumeros() {
    let primeiroNumero = Number(prompt("Digite um número:"));
    let segundoNumero = Number(prompt("Digite outro número:"));

    while (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert("Digite somente números!!");
        primeiroNumero = Number(prompt("Digite um número:"));
        segundoNumero = Number(prompt("Digite outro número:"));
    }
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}