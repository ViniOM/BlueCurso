console.clear();
const prompt = require('prompt-sync')();

console.log("------- Jogo de adivinhação  1 a 10 -------");

var usu = +prompt("Digite um numero entre 1 a 10:  ");
var numAlea = Math.floor(Math.random() * 10);
var tentativas = 1;

while(usu != numAlea) {
    console.log("ERROU!");
    tentativas = tentativas +1;
   
    if (usu < numAlea){
        console.log("------- o numero sorteado é maior -------");

    }else {
        console.log("------- O numero sorteado é menor -------");
    }

    usu = prompt("Adivinhe um numero entre 1 a 10:  ");
}

console.log("--------- ACERTOU!! -----------");
console.log(`----- tentativas: ${tentativas} -----`);
console.log();

console.log("--- Deseja tentar novamente? ---");
var dnv = prompt("");

if (dnv == "sim"){
    console.clear();
    console.log("------- Jogo de adivinhação  1 a 10 -------");

    var usu = +prompt("Digite um numero entre 1 a 10:  ");
    var numAlea = Math.floor(Math.random() * 10);
    var tentativas = 1;

    while(usu != numAlea) {
        console.log("ERROU!");
        tentativas = tentativas +1;

        if (usu < numAlea){
            console.log("------- o numero sorteado é maior -------");
    
        }else {
            console.log("------- O numero sorteado é menor -------");
        }
        
        usu = prompt("Adivinhe um numero entre 1 a 10:  ");
    }

    console.log("--------- ACERTOU!! -----------");
    console.log(`----- tentativas: ${tentativas} -----`);
    console.log();
}else {
    console.log("-------- ACABOU -------");
}  
