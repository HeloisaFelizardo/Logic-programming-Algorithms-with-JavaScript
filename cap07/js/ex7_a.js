const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const mensagem = frm.inMensagem.value.trim();
	let criptografada = '';

	for (let i = 0; i < mensagem.length; i++) {
		if (i % 2 === 0) {
			criptografada += mensagem[i];
		}
	}

	for (let i = 0; i < mensagem.length; i++) {
		if (i % 2 !== 0) {
			criptografada += mensagem[i];
		}
	}
	resp.textContent = criptografada;

	frm.descriptografar.addEventListener('click', (e) => {
		resp.innerText = mensagem;
	});
});
