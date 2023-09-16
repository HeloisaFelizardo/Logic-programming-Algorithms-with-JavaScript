const prompt = require('prompt-sync')();
const produto = prompt('Produto: ');
const numEtiquetas = prompt('Numero de etiquetas: ');

for (let i = 1; i < numEtiquetas / 2; i++) {
	console.log(`${produto.padEnd(30, '.')} ${produto.padEnd(30)}`);
}
if (numEtiquetas % 2 === 1) {
	console.log(produto);
}
