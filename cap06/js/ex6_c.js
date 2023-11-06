/* Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão "Aprovados 2º fase", ler o número de acertos para aprovação dos candidatos para a 2º fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovad, exibir mensagem. */
// Obtém o elemento de formulário
const frm = document.querySelector('form');

// Obtém o elemento de saída
const resp = document.querySelector('pre');

// Cria um array vazio para armazenar os candidatos
const candidatos = [];

// Adiciona um ouvinte de evento ao evento submit do formulário
frm.addEventListener('submit', (e) => {
	// Evita o comportamento de envio padrão do formulário
	e.preventDefault();

	// Obtém o nome do candidato do campo de entrada de nome
	const nome = frm.inNome.value;

	// Obtém o número de acertos do candidato do campo de entrada de acertos
	const acertos = Number(frm.inAcertos.value);

	// Adiciona o candidato ao array de candidatos
	candidatos.push({ nome, acertos });

	// Limpa os campos de entrada de nome e acertos
	frm.inNome.value = '';
	frm.inAcertos.value = '';

	// Focaliza o campo de entrada de nome
	frm.inNome.focus();

	// Dispara o evento click do botão Listar
	frm.btListar.dispatchEvent(new Event('click'));
});

// Adiciona um ouvinte de evento ao evento click do botão Listar
frm.btListar.addEventListener('click', () => {
	// Verifica se há candidatos na lista
	if (candidatos.length === 0) {
		// Alerta ao usuário que não há candidatos na lista
		alert('Não há candidatos na lista...');

		// Retorna
		return;
	}

	// Cria uma variável para armazenar a lista de candidatos
	let lista = '';

	// Itera sobre o array de candidatos, adicionando o nome e o número de acertos de cada candidato à variável `lista`
	for (const candidato of candidatos) {
		const { nome, acertos } = candidato;
		lista += `${nome} - ${acertos} acertos\n`;
	}

	// Atualiza o conteúdo do elemento de saída com a lista de candidatos
	resp.innerText = lista;
});

// Adiciona um ouvinte de evento ao evento click do botão Aprovados
frm.btAprovados.addEventListener('click', () => {
	// Verifica se há candidatos na lista
	if (candidatos.length == 0) {
		// Alerta ao usuário que não há candidatos na lista
		alert('Não há candidatos na lista');

		// Retorna
		return;
	}

	// Obtém o número de acertos necessário para aprovação
	const corte = Number(prompt('Número de Acertos para Aprovação? '));

	// Verifica se o número de acertos é válido
	if (corte == 0 || isNaN(corte)) {
		// Alerta ao usuário que o número de acertos é inválido
		alert('Número inválido');

		// Retorna
		return;
	}

	// Cria uma cópia do array de candidatos
	const copia = candidatos.slice();

	// Ordena a cópia do array de candidatos em ordem decrescente de número de acertos
	copia.sort((a, b) => {
		return b.acertos - a.acertos;
	});

	// Cria uma variável para armazenar a lista de candidatos aprovados
	let aprovados = '';

	// Itera sobre a cópia do array de candidatos, adicionando o nome e o número de acertos de cada candidato à variável `aprovados` se o número de acertos do candidato for maior ou igual ao número de acertos necessário para aprovação
	for (const candidato of copia) {
		if (candidato.acertos >= corte) {
			aprovados += candidato.nome + ' - ' + candidato.acertos + ' acertos\n';
		}
	}

	// Verifica se não há candidatos aprovados
	if (aprovados == '') {
		// Atualiza o conteúdo do elemento de saída com a mensagem "Não há candidatos aprovados..."
		resp.innerText = 'Não há candidatos aprovados...';
	} else {
		// Atualiza o conteúdo do elemento de saída com a lista de
		resp.innerText = aprovados;
	}
});
