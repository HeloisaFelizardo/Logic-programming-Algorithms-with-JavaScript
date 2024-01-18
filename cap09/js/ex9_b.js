/* Elaborar um programa para cadastrar produtos na lista de compras da semana. Salvar e exibir a listagem dos produtos em ordem alfabética. */
// Seleciona elementos do DOM usando os seletores CSS
const frm = document.querySelector('form');
const respLista = document.querySelector('pre');

// Adiciona um evento de envio ao formulário
frm.addEventListener('submit', (e) => {
	e.preventDefault(); // Impede o envio padrão do formulário

	// Obtém o valor do campo de produto do formulário
	const produto = frm.inProduto.value;

	// Verifica se o produto já existe na lista
	if (verProdutoExiste(produto)) {
		alert('Esse produto já existe, informe outro...');
		frm.inProduto.focus(); // Coloca o foco de volta no campo de produto
		return; // Sai da função se o produto já existe
	}

	// Adiciona o novo produto à lista armazenada na localStorage
	if (localStorage.getItem('produto')) {
		const produtos = localStorage.getItem('produto') + ';' + produto;
		localStorage.setItem('produto', produtos);
	} else {
		localStorage.setItem('produto', produto);
	}

	mostrarLista(); // Atualiza a lista na interface
	frm.reset(); // Reseta o formulário
	frm.inProduto.focus(); // Coloca o foco de volta no campo de produto
});

// Função para verificar se um produto já existe na lista
const verProdutoExiste = (produto) => {
	if (localStorage.getItem('produto')) {
		const produtos = localStorage.getItem('produto').split(';');
		return produtos.includes(produto.toString());
	} else {
		return false;
	}
};

// Função para mostrar a lista de produtos na interface
const mostrarLista = () => {
	if (!localStorage.getItem('produto')) {
		// Se não houver produtos, exibe uma mensagem padrão
		respLista.innerText =
			'Nenhum produto adicionado\n----------------------------------------------\n';
		return;
	}

	// Obtém a lista de produtos da localStorage, remove valores vazios e ordena em ordem alfabética
	const produtos = localStorage.getItem('produto').split(';').filter(Boolean);
	produtos.sort();

	let linhas = '';
	for (let i = 0; i < produtos.length; i++) {
		linhas += produtos[i] + '\n'; // Cria linhas para cada produto
	}

	// Cria uma mensagem de cabeçalho e exibe a lista formatada na interface
	let mensagem = 'Produtos adicionados\n----------------------------------------------';
	respLista.innerText = mensagem + '\n' + linhas;
};

// Chama a função mostrarLista quando a página é carregada
window.addEventListener('load', mostrarLista);

// Adiciona um evento de clique ao botão de limpar
frm.btLimpar.addEventListener('click', () => {
	if (confirm('Confirma exclusão de todos os produtos?')) {
		localStorage.removeItem('produto'); // Remove todos os produtos da localStorage
		mostrarLista(); // Atualiza a lista na interface
	}
});
