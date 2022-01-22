
const prompt = require('prompt-sync')();

let senha;
let usuario;

do {
    usuario = prompt("Digite seu usuario");
    senha = prompt("digite a senha de acesso: ");

} while (usuario == senha);
console.log("Acertou!");
