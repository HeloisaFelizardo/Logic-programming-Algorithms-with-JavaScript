const frm = document.querySelector('form'); // obtém elementos da página
const dvNome = document.querySelector('#divNome');

frm.addEventListener('submit', (e) => {
	e.preventDefault(); // evita envio do form

	const nome = frm.inNome.value.trim(); // trim(): remove espaços em branco (no início e final)
	const partes = nome.split(' ');

	if (partes.length == 1) {
		alert('Informe o nome completo');
		frm.inNome.focus();
		return;
	}

	// para retirar os h3 já existentes (se clicou uma segunda vez no botão)
	const listaH3 = document.querySelectorAll('h3');
	for (let i = listaH3.length - 1; i >= 0; i--) {
		dvNome.removeChild(listaH3[i]);
	}

	const cores = [
		'blue',
		'red',
		'yellow',
		'green',
		'orange',
		'chocolate',
		'deeppink',
		'purple',
		'violet',
		'aquamarine',
	];
	for (const parte of partes) {
		const h3 = document.createElement('h3');
		const texto = document.createTextNode(parte);
		h3.appendChild(texto);
		const corSorteada = Math.floor(Math.random() * 10);
		h3.style.color = cores[corSorteada];
		dvNome.appendChild(h3);
	}
});
