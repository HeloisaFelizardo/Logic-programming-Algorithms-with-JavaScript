const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const num = Number(frm.inNumero.value);

	let temDivisor = 0; // declara e inicializa a variável tipo flag

	for (let i = 2; i <= num / 2; i++) {
		// percorre os possíveis divisores do num
		if (num % i == 0) {
			// se tem um divisor
			temDivisor = 1; // muda o flag
			break; // sai da repetição
		}
	}

	if (num > 1 && !temDivisor) {
		// se num > 1 e não possui divisor
		resp.innerText = `${num} É primo`;
	} else {
		resp.innerText = `${num} Não é primo`;
	}
});
