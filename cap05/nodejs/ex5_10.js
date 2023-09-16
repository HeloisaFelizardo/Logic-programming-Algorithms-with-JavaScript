const prompt = require('prompt-sync')();
const valor = prompt('Valor R$: ');
const numeroParcelas = prompt('Número de parcelas: ');

const valorParcelas = Math.floor(valor / numeroParcelas);
const valorFinal = valorParcelas + (valor % numeroParcelas);

for (let i = 1; i < numeroParcelas; i++) {
	console.log(`${numeroParcelas}º parcela: R$ ${valorParcelas}`);
}

console.log(`${numeroParcelas} parcela: R$ ${valorFinal.toFixed(2)}`);
