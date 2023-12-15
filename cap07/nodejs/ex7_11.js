/* Elaborar um program que solicite um numero de parcelas que devem ser geradas e calcule a data de cada uma dessas parcelas, uma para cada mês, a partir do mês seguinte ao atual, mantendo o dia atual. Observe o exemplo de execução desse programa, considerando que a data atual seja 5 de Janeiro de 2022. */

const prompt = require('prompt-sync')();
const parcelas = Number(prompt('Quantas parcelas? '));
const data = new Date();
for (let i = 0; i < parcelas; i++) {
	data.setMonth(data.getMonth() + 1);
	const dia = data.getDate();
	const mes = data.getMonth() + 1;
	const ano = data.getFullYear();
	const diaZero = dia < 10 ? '0' + dia : dia;
	const mesZero = mes < 10 ? '0' + mes : mes;
	console.log(`${i + 1}ª parcela: ${diaZero}/${mesZero}/${ano}`);
}
