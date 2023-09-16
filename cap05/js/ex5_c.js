const frm = document.querySelector('form'); // obtém elementos da página
const resp1 = document.querySelector('#outDivisores');
const resp2 = document.querySelector('#outResposta');

frm.addEventListener('submit', (e) => {
	// "escuta" evento submit do form
	e.preventDefault(); // evita envio do form

	const numero = Number(frm.inNumero.value);

	// como 1 é um divisor universal, já iniciamos com ele
	let divisores = 'Divisores do ' + numero + ': 1';
	let soma = 1;

	// percorre os possíveis divisores e acumula
	for (let i = 2; i <= numero / 2; i++) {
		if (numero % i == 0) {
			divisores = divisores + ', ' + i; // vírgula + i (evita última vírgula)
			soma = soma + i;
		}
	}
	divisores = divisores + ' (Soma: ' + soma + ')';

	// altera o conteúdo de outDivisores
	resp1.innerText = divisores;

	// verifica se é perfeito e exibe resposta na tag outResposta (resp2)
	if (numero == soma) {
		resp2.innerText = `${numero} É um Número Perfeito`;
	} else {
		resp2.innerText = `${numero} Não É um Número Perfeito`;
	}
});
