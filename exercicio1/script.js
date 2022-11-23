/* 
# Exercício 1

Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número*/


let numeroPar = Number(prompt('Digite um número par'));
let resto = numeroPar % 2
console.log('O resto da divisão desse número por 2', resto);

//Que sempre que o numero é par o resto será 0;
//Que sempre que o número é ímpar o resto será 1;







