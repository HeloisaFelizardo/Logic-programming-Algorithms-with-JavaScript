const frm = document.querySelector('form');
const resp = document.querySelector('#resp');

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	const fruta = frm.inFruta.value;
	const num = Number(frm.inNumero.value);
	let result = '';
	for (let i = 1; i <= num; i++) {
		result = result + fruta + '*';
	}

	resp.textContent = result + fruta;
});
