// Obtém elementos da página
const frm = document.querySelector('form');
const resp1 = document.querySelector('span');
const resp2 = document.querySelector('h4');

// Adiciona um evento de envio ao formulário
frm.addEventListener('submit', (e) => {
	e.preventDefault();

	// Obtém o valor do campo de serviço do formulário
	const servico = frm.inServico.value;

	// Adiciona o novo serviço à lista armazenada na localStorage
	if (localStorage.getItem('servico')) {
		localStorage.setItem('servico', localStorage.getItem('servico') + ';' + servico);
	} else {
		localStorage.setItem('servico', servico);
	}

	// Atualiza o número de serviços pendentes na interface
	mostrarPendentes();

	frm.reset(); // Reseta o formulário
	frm.inServico.focus(); // Coloca o foco de volta no campo de serviço
});

// Função para mostrar o número de serviços pendentes na interface
const mostrarPendentes = () => {
	let pendentes;

	if (localStorage.getItem('servico')) {
		pendentes = localStorage.getItem('servico').split(';').length;
	} else {
		pendentes = 0;
	}

	resp1.innerText = pendentes;
};

// Chama a função mostrarPendentes quando a página é carregada
window.addEventListener('load', mostrarPendentes);

// Adiciona um evento de clique ao botão de executar
frm.btExecutar.addEventListener('click', () => {
	if (!localStorage.getItem('servico')) {
		alert('Não há serviços pendentes para executar');
		return;
	}

	// Obtém a lista de serviços da localStorage
	const servicos = localStorage.getItem('servico').split(';');

	// Remove o primeiro serviço da lista
	const emExecucao = servicos.shift();

	// Exibe o serviço removido na interface
	resp2.innerText = emExecucao;

	// Salva a nova lista (sem o serviço removido) na localStorage
	localStorage.setItem('servico', servicos.join(';'));

	// Atualiza o número de serviços pendentes na interface
	mostrarPendentes();
});
