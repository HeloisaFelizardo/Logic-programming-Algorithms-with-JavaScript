/* Elaborar um programa que leia a altura de uma arvore (numero de linhas) e apos exiba a arvore iniciando com 2 estrellas (asteriscos) e aumentando em 2 a cada linha. Fazer com que a arvore tenha uma margem esquerda fixa de 30 espacos e fique centralizada, conforme ilustra a execução do programa a seguir. */

const prompt = require('prompt-sync')();
const numeroLinhas = Number(prompt('Qual é o numero de linhas? '));

for (let i = 0; i < numeroLinhas; i++) {
	const espacos = 30 + (numeroLinhas - i);
	console.log(' '.repeat(espacos) + '*'.repeat(i * 2));
}
for (let i = 0; i < numeroLinhas / 2; i++) {
	const espacos = 28 + numeroLinhas;
	console.log(' '.repeat(espacos) + '*'.repeat(3));
}
