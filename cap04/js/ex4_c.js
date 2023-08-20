const form = document.querySelector('form');
const resp1 = document.querySelector('#outTempo');
const resp2 = document.querySelector('#outTroco');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const valor = Number(form.inValor.value);

	// caso valor insuficiente
	if (valor < 1.0) {
		alert('Valor Insuficiente (no mínimo, R$ 1.00)');
		form.inValor.focus();
		return;
	}

	// declara variáveis
	let tempo;
	let troco;

	// cria as condições para verificar tempo e troco
	if (valor >= 3.0) {
		tempo = 120;
		troco = valor - 3.0;
	} else if (valor >= 1.75) {
		tempo = 60;
		troco = valor - 1.75;
	} else {
		tempo = 30;
		troco = valor - 1.0;
	}

	// exibe as respostas
	resp1.innerText = `Tempo: ${tempo} min`;
	if (troco > 0) {
		resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
	}
});
