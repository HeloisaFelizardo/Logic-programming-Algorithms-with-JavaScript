const frm = document.querySelector('form');
const resp = document.querySelector('#resp');

frm.addEventListener('click', (e) => {
	e.preventDefault();

	const numeroChincilas = Number(frm.inNumero.value);
	const anos = Number(frm.inAnos.value);

	// cria uma variável do tipo String, que irá concatenar a resposta
	let resposta = '';
	let total = numeroChincilas;

	// define o laço de repetição
	for (let i = 1; i <= anos; i++) {
		resposta = resposta + i + 'º Ano: ' + total + ' Chinchilas\n';
		total = total * 3;
	}

	// altera o conteúdo da tag de resposta
	resp.textContent = resposta;
});
