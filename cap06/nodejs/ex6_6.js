/* Elaborar um programa que leia nome e idade de "n" clientes de um banco (até ser digitado "Fim" no nome). Após, classifique e exiba os clientes em 2 grupos: preferencial (a partir de 60 anos) e Fila normal (até 59 anos). Informe a ordem de atendimento em cada grupo de acordo com a chegada dos clientes. */

const prompt = require('prompt-sync')();

console.log('Informe os clientes em ordem de chegada ou "FIM" no nome para sair.');

const clientes = [];

do {
	const nome = prompt('Nome: ');
	if (nome.toLocaleLowerCase() === 'fim') {
		break;
	}
	let idade;
	while (true) {
		idade = Number(prompt('Idade: '));
		if (!isNaN(idade)) {
			break; // Sai do loop quando a idade é válida
		}
		console.log('Digite uma idade válida.');
	}

	// Procura se o cliente já foi inserido na lista de clientes
	const clienteExistente = clientes.find((aluno) => aluno.nome === nome);

	if (clienteExistente) {
		clienteExistente.idade = idade; // Atualiza a idade do cliente existente
		console.log(`Idade do cliente ${nome} atualizada.`);
	} else {
		clientes.push({ nome, idade }); // Adiciona um novo cliente à lista
		console.log('Ok! Cliente inserido na fila...');
	}
} while (true);

console.log('\nFila Preferencial');
console.log('-'.repeat(40));

const filaPref = clientes.filter((cliente) => cliente.idade >= 60);
filaPref.forEach((fila, i) => {
	console.log(`${i + 1}. ${fila.nome}`);
});

console.log('\nFila Normal');
console.log('-'.repeat(40));

const filaNormal = clientes.filter((cliente) => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
	console.log(`${i + 1}. ${fila.nome}`);
});
