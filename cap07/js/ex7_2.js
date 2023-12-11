/* O programa deve ler uma palavra (fruta) e exibir, após o clique no botão "Mostrar dica", a letra inicial da fruta e as demais ocorrências dessa letra na palavra. As outras letras devem ser exibidas apenas um sublinhado, para representar cada letra. O conteúdo do campo de entrada deve ser substituído por asteríscos. */

const frm = document.querySelector('form');
const resp = document.querySelector('span');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const fruta = frm.inFruta.value.toUpperCase();
	let resposta = '';

	for (const letra of fruta) {
		if (letra == fruta.charAt(0)) {
			resposta += fruta.charAt(0);
		} else {
			resposta += '_';
		}
	}

	resp.innerText = resposta;
	frm.inFruta.value = '*'.repeat(fruta.length);
});
