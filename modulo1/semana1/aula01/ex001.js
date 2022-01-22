const prompt = require("prompt-sync")();

var notaA = Math.round(prompt("Digite sua nota 1: "));
var notaB = Math.round(prompt("Digite sua nota 2: "));
var media = (notaA * 4 + notaB * 6) / + 4 + 6;


console.log(media);

// var idade1 = +prompt("Idade: ");
// var pessoas1 = +prompt("Quantas pessoas tem essa idade?");

// var idade2 = +prompt("Idade: ");
// var pessoas2 = +prompt("Quantas pessoas tem essa idade?");

// var idade3 = +prompt("Idade: ");
// var pessoas3 = +prompt("Quantas pessoas tem essa idade?");

// var idade4 = +prompt("Idade: ");
// var pessoas4 = +prompt("Quantas pessoas tem essa idade?");

// var calculo = (idade1 * pessoas1) + (idade2 * pessoas2) + (idade3 * pessoas3) + (idade4 * pessoas4);
// var calculoFinal = calculo / pessoas1 + pessoas2 + pessoas3 + pessoas4;

// console.log(calculoFinal);