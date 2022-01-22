const prompt = require('prompt-sync')();

console.log("---- CADASTRO DE CLIENTES ----");

var op1 = console.log("1- cartao");
var op2 = console.log("2- site");
var op3 = console.log("3- cadastro");

var resp = prompt("Escolha uma das opçoes acima: ");

while(resp != "1" && "2" && "3") {
    console.log("Invalido!");
    op1 = console.log("1- cartao");
    op2 = console.log("2- site");
    op3 = console.log("3- cadastro");
}

console.log(resp);