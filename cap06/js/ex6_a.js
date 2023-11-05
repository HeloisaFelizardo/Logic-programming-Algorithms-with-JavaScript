/* Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatoria de um campeonato. O programa deve conter 3 funções (a serem executadas no evento click de cada botão) para: 1) Validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) Listar os clubes (se houver); 3) Montar a tabela de jogos, no formato primeiro x último, segundo x peúnltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informado seja ímpar.  */

const frm = document.querySelector('form');
let resp = document.querySelector('pre');

const clubes = [];

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const clube = frm.inClube.value;

	clubes.push(clube);

	frm.btListar.dispatchEvent(new Event('click'));
	frm.reset();
	frm.inClube.focus();
});

frm.btListar.addEventListener('click', () => {
	if (clubes.length == 0) {
		alert('Não há clubes na lista...');
		inClube.focus();
		return;
	}

	let lista = '';

	for (const clube of clubes) {
		lista += `${clube} \n`;
	}
	resp.innerText = lista;
});

frm.btMontar.addEventListener('click', () => {
	console.log('btTabela');
	const tamanho = clubes.length;

	if (tamanho == 0 || tamanho % 2 == 1) {
		alert('Deve haver número par de clubes');
		inClube.focus();
		return;
	}
	let jogos = '';
	const ultimo = tamanho - 1;
	for (i = 0; i < tamanho / 2; i++) {
		jogos += clubes[i] + ' x ' + clubes[ultimo - i] + '\n';
	}

	resp.innerText = jogos;
});
