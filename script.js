//Exercício 1
/*let n = 0;

while (n <= 10) {
    console.log(n);
    n++
}
*/
//Exercício 2
/*let num;

do {
    num = prompt("Dígite um número: ");
}
while (num >=0);*/

//Exercício 3
/*let soma = 0;
let numero;

while (true) {
    numero = Number(prompt("Por favor, insira um número:"));

    if (isNaN(numero)) {
        break;
    }
    soma += numero;
}
console.log("A soma dos números inseridos é: " + soma);*/

//Exercício 4
/*const numeroParaAdivinhar = 6;
let palpite;

while (true) {
    palpite = Number(prompt("Adivinhe um número entre 1 e 10:"));
    
    if (palpite === numeroParaAdivinhar) {
        alert("Parabéns! Você acertou o número.");
        break;
    } else {
        alert("Tente novamente!");
    }
}*/
//Exercício 5
let numero = prompt("Insira um número inteiro: ");
let soma = 0;
let contador = 1;

while (contador <= numero) {
    soma += contador;
    contador ++
}
alert("A soma de todos os números inteiros de 1 até " + numero + " é: " + soma);

