const form = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

let resposta = '';
let numContas = 0;
let valorTotal = 0;

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const descricao = form.inDescricao.value;
	const valor = Number(form.inValor.value);

	numContas++;
	valorTotal = valorTotal + valor;
	resposta = resposta + `${descricao} - R$: ${valor.toFixed(2)} \n`;
	resp1.textContent = `${resposta} -------------------------------------`;
	resp2.textContent = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)} `;

	form.inDescricao.value = '';
	form.inValor.value = '';
	form.inDescricao.focus();
});
