const frm = document.querySelector('form');
const resp = document.querySelector('pre');
const criancas = [];

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const nome = frm.inNome.value;
	const idade = Number(frm.inIdade.value);

	criancas.push({ nome, idade });
	frm.reset();
	frm.inNome.focus();
	frm.btListar.dispatchEvent(new Event('click'));
});

frm.btListar.addEventListener('click', () => {
	console.log('btListar');
	if (criancas.length == 0) {
		alert('Não há crianças na lista');
	}
	let lista = '';
	for (const crianca of criancas) {
		const { nome, idade } = crianca;
		lista += `${nome} - ${idade} anos\n`;
	}
	resp.innerText = lista;
});

frm.btResumir.addEventListener('click', () => {
	console.log('btResumir');
	if (criancas.length == 0) {
		alert('Não há crianças na lista');
		return;
	}
	const copia = [...criancas];
	copia.sort((a, b) => a.idade - b.idade);
	let resumo = '';
	let aux = copia[0].idade;
	let nomes = [];
	for (const crianca of copia) {
		const { nome, idade } = crianca;
		if (idade == aux) {
			nomes.push(nome);
		} else {
			resumo += `${aux} anos: ${nomes.length} criancas - `;
			resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n';
			resumo += `(${nomes.join(', ')})\n\n`;
			aux = idade;
			nomes = [];
			nomes.push(nome);
		}
	}
	resumo += `${aux} anos: ${nomes.length} crianças -`;
	resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n';
	resumo += `(${nomes.join(', ')})\n\n`;
	resp.innerText = resumo;
});
