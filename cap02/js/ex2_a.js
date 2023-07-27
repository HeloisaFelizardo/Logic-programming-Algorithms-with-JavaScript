const frm = document.querySelector('form');
const outResp1 = document.querySelector('#outResp1');
const outResp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
	const medicamento = frm.inMedicamento.value;
	const preco = frm.inPreco.value;

	const valorTotal = Number(Math.floor(preco)) * 2;

	outResp1.textContent = `Promoção de ${medicamento}`;
	outResp2.textContent = `Leve 2 por apenas R$: ${valorTotal.toFixed(2)}`;

	e.preventDefault();
});
