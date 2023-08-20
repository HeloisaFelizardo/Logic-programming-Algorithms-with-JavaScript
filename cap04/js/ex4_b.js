const form = document.querySelector('form');
const resp = document.querySelector('#outResp');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const velocidadePermitida = Number(form.inVelocidadePermitida.value);
	const velocidadeCondutor = Number(form.inVelocidadeCondutor.value);
	const maisVinte = velocidadePermitida * 1.2;

	resp.textContent = 'Situação: ';

	if (velocidadeCondutor <= velocidadePermitida) {
		resp.textContent += 'Sem Multa';
	} else if (velocidadeCondutor <= maisVinte) {
		resp.textContent += 'Multa Leve';
	} else {
		resp.textContent += 'Multa Grave';
	}
});
