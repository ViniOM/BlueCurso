const prompt = require("prompt-sync")();

var num = prompt("Digite um numero PAR: ");

while (num % 2) {
    console.log();
    console.log("-------------------------")
    console.log("esse numero é IMPAR.");
    console.log("-------------------------")
    console.log();
    
    num = prompt("Digite um numero PAR: ");
    console.log();
}
console.log("-------------------------")
console.log(`${num} é um numero PAR!!`);
console.log("-------------------------")
console.log();