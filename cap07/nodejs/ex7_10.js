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
