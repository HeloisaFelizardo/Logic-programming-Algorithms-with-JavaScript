/* Elaborar um programa para um empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final. */

const prompt = require('prompt-sync')();
const salario = Number(prompt('Salário R$: '));
const tempo = Number(prompt('Tempo (anos): '));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = (salario * quadrienios) / 100;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${salario + acrescimo}`);
