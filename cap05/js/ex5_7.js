const frm = document.querySelector('form');
const resp = document.querySelector('#outEspacos');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const num = Number(frm.inNumero.value);
	let estrelas = '';

	for (let i = 1; i <= num; i++) {
		if (i % 2 === 1) {
			estrelas += '*';
		} else {
			estrelas += '-';
		}
	}
	resp.textContent = estrelas;
});
