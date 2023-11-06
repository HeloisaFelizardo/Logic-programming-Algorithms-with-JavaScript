/* Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetido. Exibir a lista de números a cada inclusão. Ao clicar no botão "Verificar Ordem", o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente. */
// Obtém o elemento de formulário
const frm = document.querySelector('form');

// Obtém os dois elementos de saída
const resp1 = document.querySelector('#outLista');
const resp2 = document.querySelector('#outOrdem');

// Cria um array vazio para armazenar os números
const numeros = [];

// Adiciona um ouvinte de evento ao evento submit do formulário
frm.addEventListener('submit', (e) => {
	// Evita o comportamento de envio padrão do formulário
	e.preventDefault();

	// Obtém o número do campo de entrada do formulário
	const numero = Number(frm.inNumero.value);

	// Verifica se o número já está na lista
	if (numeros.includes(numero)) {
		// Alerta ao usuário que o número já está na lista
		alert('Número repetido! Adicione outro número!');
	} else {
		// Adiciona o número à lista
		numeros.push(numero);
	}

	// Atualiza o primeiro elemento de saída com a lista atual de números
	resp1.innerText = `Números: ${numeros.join(', ')}`;

	// Limpa o segundo elemento de saída
	resp2.innerText = '';

	// Limpa o campo de entrada do formulário e o focaliza
	frm.inNumero.value = '';
	frm.inNumero.focus();
});

// Adiciona um ouvinte de evento ao evento click do botão Verificar do formulário
frm.btVerificar.addEventListener('click', () => {
	// Verifica se há números na lista
	if (numeros.length === 0) {
		// Alerta ao usuário que não há números na lista
		alert('Não há números na lista...');

		// Focaliza o campo de entrada do formulário
		frm.inNumero.focus();

		// Retorna
		return;
	}

	// Cria uma variável para armazenar a ordem dos números
	let ordem = true;

	// Itera sobre a lista de números, comparando cada número com o próximo
	for (let i = 0; i < numeros.length - 1; i++) {
		// Se o número atual for maior que o próximo número, então os números não estão em ordem
		if (numeros[i] > numeros[i + 1]) {
			// Define a variável de ordem como falsa
			ordem = false;

			// Interrompe o loop
			break;
		}
	}

	// Atualiza o segundo elemento de saída com a ordem dos números
	resp2.innerText = ordem ? 'Ok! Números estão em ordem crescente' : 'Atenção... Números não estão em ordem crescente';
});
