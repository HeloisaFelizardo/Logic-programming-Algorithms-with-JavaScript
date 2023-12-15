const frm = document.querySelector('form'); // obtém elementos da página
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	// "escuta" evento submit do form
	e.preventDefault(); // evita envio do form
	const frase = frm.inFrase.value.toUpperCase(); // obtém conteúdo e já converte para maiúscula

	if (frase.indexOf(' ') == -1) {
		alert('Informe, por favor, uma frase');
		frm.inFrase.focus();
		return;
	}

	// retira os espaços em branco da frase
	const frase2 = frase.replace(/ /g, '');
	const tam = frase2.length;

	let iguais = true;

	// for repete até a metade (compara as primeiras letras com as últimas)
	for (let i = 0; i < tam / 2; i++) {
		// verifica se a primeira letra é diferente da última (e sucessivamente)
		if (frase2[i] != frase2[tam - 1 - i]) {
			iguais = false;
			break;
		}
	}

	if (iguais) {
		resp.innerText = `${frase} é um Palíndromo`;
	} else {
		resp.innerText = `${frase} Não é um Palíndromo`;
	}
});
