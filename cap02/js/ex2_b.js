const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	const valor = Number(frm.inValor.value);
	const tempo = Number(frm.inTempo.value);

	const valorTotal = Math.ceil(tempo / 15) * valor;

	resp.textContent = `Valor a pagar R$: ${valorTotal.toFixed(2)}`;

	e.preventDefault();
});
