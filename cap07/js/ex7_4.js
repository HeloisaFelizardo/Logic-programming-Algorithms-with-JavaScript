/* O programa deve ler o nome completo de um participante do evento e exibir apenas o seu nome e sobrenome. */
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const nome = frm.inNome.value.trim();

	if (!nome.includes(' ')) {
		alert('Informe o nome completo...');
		return;
	}

	const priEspaco = nome.indexOf(' ');
	const ultEspaco = nome.lastIndexOf(' ');
	const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

	resp.innerText = `Crachá: ${cracha}`;
});
