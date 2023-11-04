let exibeOlaMundoNoConsole = mensagem => console.log("Olá Mundo!");

function exibeNomeNoConsole(nome) {
    console.log(`Olá, ${nome}!`);
}

function dobraNumero(numero) {
    let numeroDobrado = Math.pow(numero, 2);
    return numeroDobrado;
}

function calculaMedia(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}

let maiorNumero = function(primeiroNumero, segundoNumero) {
    let maiorNumero = primeiroNumero > segundoNumero ? primeiroNumero : segundoNumero;
    return maiorNumero;
}

let numeroMultiplicadoPorEleMesmo = function(numero) {
    let multiplicacao = numero * numero;
    return multiplicacao; 
}

exibeOlaMundoNoConsole();
exibeNomeNoConsole("Lucas");
let numeroAoQuadrado = dobraNumero(2);
let media = calculaMedia(3, 7, 11);
let maior = maiorNumero(2, 8);
let multiplicacao = numeroMultiplicadoPorEleMesmo(3);

console.log(`O número ao quadrado é ${numeroAoQuadrado}`);
console.log(`O cálculo da média é ${media}`);
console.log(`O maior número é ${maior}`);
console.log(`O número multiplicado por ele mesmo é ${multiplicacao}`);