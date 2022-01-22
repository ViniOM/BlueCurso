const prompt = require('prompt-sync')();

console.log();
console.log("----- Peça 1 -----");
console.log("----- R$ 1,00 -----");

var qntd1 = prompt("Quantas peças voce quer?  ");
var valor1 = 1.00;
console.log();

console.log("----- Peça 2 -----");
console.log("----- R$ 5,00 -----");

console.log();
var qntd2 = prompt("Quantas peças voce quer?  ");
var valor2 = 5.00;
console.log();

console.log("---------------------------------------")

var total = parseFloat(valor1 * qntd1 + valor2 * qntd2);

console.log();
console.log(`Total:  R$ ${total}`);
console.log();
console.log("---------------------------------------")