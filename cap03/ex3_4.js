/* Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas). */

const prompt = require('prompt-sync')();
const pesoKg = Number(prompt('Peso da ração (Kg): '));
const consumo = Number(prompt('Consumo diário (gr): '));
const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);
