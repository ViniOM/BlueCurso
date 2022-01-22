// concole.clear();
// console.log();


// var num1 = 15;
// var num2 = 20;

// while (num1 < num2) {
//     console.log(`O ${num1} é menor`);
//     num1++
// }

const prompt = require('prompt-sync')();

let senha;
let usuario;

do {
    usuario = prompt("Digite seu usuario");
    senha = prompt("digite a senha de acesso: ");

} while (usuario == senha);
console.log("Acertou!");


