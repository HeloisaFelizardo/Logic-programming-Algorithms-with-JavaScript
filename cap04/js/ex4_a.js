const form = document.querySelector('form');
const resp = document.querySelector('#outResp');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const numero = Number(form.inNumero.value);
	console.log(numero);

	return numero % 2 === 0 ? (resp.textContent = `${numero} é Par`) : (resp.textContent = `${numero} é Ímpar`);
});
