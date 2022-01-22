
const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
while(nome.length < 3) {
    console.log("Nome invalido!");
    nome = prompt("Digite seu nome: ")
}

var idade = prompt("Digite sua idade: ");
while(idade < 0 || idade > 150) {
    console.log("idade invalida!");
    idade = prompt("Digite sua idade: ")
}

var salario = prompt("Digite seu salario: ");
while(salario < 0) {
    console.log("Salario invalido!");
    salario = prompt("Digite seu salario: ");
}

var estado = prompt("Digite seu estado civil: ");   
while(estado != "s" & estado != "v" & estado != "d" & estado != "c") {
    console.log("Estado Civil invalido!");
    estado = prompt("Digite seu estado civil: ");
}

console.log(`nome: ${nome}, idade: ${idade}, salario: ${salario}, estado civil: ${estado}`);