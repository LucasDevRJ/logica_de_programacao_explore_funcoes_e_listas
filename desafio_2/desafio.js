function calcularImc(altura, peso) {
    let imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function calcularFatorial(numero) {
    let fatorial = numero;
    for (let i = 1; i < numero; i++) {
        fatorial = fatorial * i;
        console.log(`${numero} x ${i}`)
    }
    return fatorial;
}

function converteDolarParaReal(valorEmDolar) {
    let conversao = valorEmDolar * 4.80;
    return conversao.toFixed(2);
}

function calculaAreaDoPerimetro(altura, largura) {
    let area = largura * altura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área do retângulo é ${area.toFixed(2)} e o perimetro dele é ${perimetro.toFixed(2)}`);
}

function calculaAreaEPerimetroDoCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;
    console.log(`A área do circulo é ${area.toFixed(2)} e o perimetro dele é ${perimetro.toFixed(2)}`);
}

function calculaTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let calculo = numero * i;
        console.log(`${numero} x ${i} = ${calculo}`);
    }
}

let imc = calcularImc(1.83, 81.0);
console.log(`O meu IMC é ${imc}`);

let fatorial = calcularFatorial(6);
console.log(`O fatorial é ${fatorial}`);

let conversao = converteDolarParaReal(320.00);
console.log(`O valor da conversão é R$ ${conversao}`);

calculaAreaDoPerimetro(3.2, 5.6);
calculaAreaEPerimetroDoCirculo(3);
calculaTabuada(5);