/* Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatoria de um campeonato. O programa deve conter 3 funções (a serem executadas no evento click de cada botão) para: 1) Validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) Listar os clubes (se houver); 3) Montar a tabela de jogos, no formato primeiro x último, segundo x peúnltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informado seja ímpar.  */

// Obtém o elemento de formulário
const frm = document.querySelector('form');

// Cria uma variável para armazenar o elemento de saída
let resp = document.querySelector('pre');

// Cria um array vazio para armazenar os clubes
const clubes = [];

// Adiciona um ouvinte de evento ao evento submit do formulário
frm.addEventListener('submit', (e) => {
	// Evita o comportamento de envio padrão do formulário
	e.preventDefault();

	// Obtém o nome do clube do campo de entrada de clube
	const clube = frm.inClube.value;

	// Adiciona o clube ao array de clubes
	clubes.push(clube);

	// Dispara o evento click do botão Listar
	frm.btListar.dispatchEvent(new Event('click'));

	// Limpa os campos de entrada de clube
	frm.inClube.value = '';

	// Focaliza o campo de entrada de clube
	frm.inClube.focus();
});

// Adiciona um ouvinte de evento ao evento click do botão Listar
frm.btListar.addEventListener('click', () => {
	// Verifica se há clubes na lista
	if (clubes.length == 0) {
		// Alerta ao usuário que não há clubes na lista
		alert('Não há clubes na lista...');

		// Focaliza o campo de entrada de clube
		frm.inClube.focus();

		// Retorna
		return;
	}

	// Cria uma variável para armazenar a lista de clubes
	let lista = '';

	// Itera sobre o array de clubes, adicionando o nome de cada clube à variável `lista`
	for (const clube of clubes) {
		lista += `${clube} \n`;
	}

	// Atualiza o conteúdo do elemento de saída com a lista de clubes
	resp.innerText = lista;
});

// Adiciona um ouvinte de evento ao evento click do botão Montar
frm.btMontar.addEventListener('click', () => {
	// Verifica se o número de clubes é par
	const tamanho = clubes.length;

	if (tamanho == 0 || tamanho % 2 == 1) {
		// Alerta ao usuário que o número de clubes deve ser par
		alert('Deve haver número par de clubes');

		// Focaliza o campo de entrada de clube
		frm.inClube.focus();

		// Retorna
		return;
	}

	// Cria uma variável para armazenar a lista de jogos
	let jogos = '';

	// Itera sobre metade do array de clubes, adicionando o nome de cada clube à variável `jogos`
	const ultimo = tamanho - 1;
	for (let i = 0; i < tamanho / 2; i++) {
		jogos += clubes[i] + ' x ' + clubes[ultimo - i] + '\n';
	}

	// Atualiza o conteúdo do elemento de saída com a lista de jogos
	resp.innerText = jogos;
});
