const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	const nome = frm.inNome.value;
	resp.innerText = `Olá ${nome}`;
	e.preventDefault();
});
