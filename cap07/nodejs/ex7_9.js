/* Elaborar um programa que leia uma formula matematica e analise se os parenteses utilizado na formula estao corretos. A analise deve considerar dois fatores: o numero de "(" deve ser igual ao numero de ")" e, ao ler a formula da esquerda para a direita, em nenhum momento, o numero de ")" pode ser maior que o numero de "(", ou seja, nao pode fechar um parentese sem antes ter aberto. */

const prompt = require('prompt-sync')();
const formula = prompt('Formula: ');
let abre = 0;
let fecha = 0;
for (const simbolo of formula) {
	if (simbolo == '(') {
		abre++;
	} else if (simbolo == ')') {
		fecha++;
	}
	if (fecha > abre) {
		break;
	}
}
if (abre == fecha) {
	console.log('Ok! Formula correta (em relação aos parenteses)');
} else {
	console.log('Erro... Formula incorreta');
}
