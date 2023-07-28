const frm = document.querySelector('form'); // obtém elementos da página
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

frm.addEventListener('submit', (e) => {
	// "escuta" evento submit do form
	e.preventDefault(); // evita envio do form

	const saque = Number(frm.inSaque.value); // obtém valor do saque

	if (saque % 10 != 0) {
		// se saque não é múltiplo de 10
		alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)');
		frm.inSaque.focus();
		return;
	}

	const notasCem = Math.floor(saque / 100); // calcula notas de 100
	let resto = saque % 100; // quanto sobra para pagar
	const notasCinquenta = Math.floor(resto / 50); // calcula notas de 50
	resto = resto % 50; // quanto ainda sobra
	const notasDez = Math.floor(resto / 10); // calcula notas de 10

	if (notasCem > 0) {
		// exibe as notas se houver
		resp1.innerText = `Notas de R$ 100: ${notasCem}`;
	}
	if (notasCinquenta > 0) {
		resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
	}
	if (notasDez > 0) {
		resp3.innerText = `Notas de R$ 10: ${notasDez}`;
	}
});
