/* Elaborar um programa que leia nome e nota de "n" alunos até o usuário digitar "Fim" no nome. Após, verifique e exiba a maior nota da turma. Se a nota for maior ou igual a 7, exiba os alunos que a obtiveram. Caso contrário, exiba a mensagem "Não há alunos em destaque na turma." */

const prompt = require('prompt-sync')();
console.log('Informe os alunos. Após digite "Fim" no nome para sair.');
const alunos = [];

do {
	const nome = prompt('Nome: ');
	if (nome.toLowerCase() === 'fim') {
		break;
	}

	let nota;

	while (true) {
		nota = Number(prompt('Nota: '));
		if (!isNaN(nota) && nota >= 0 && nota <= 10) {
			break; // Sai do loop quando a nota é válida
		}
		console.log('Digite uma nota válida entre 0 e 10.');
	}

	// Procura se o aluno já foi inserido na lista de alunos
	const alunoExistente = alunos.find((aluno) => aluno.nome === nome);

	if (alunoExistente) {
		alunoExistente.nota = nota; // Atualiza a nota do aluno existente
		console.log(`Nota do(a) aluno(a) ${nome} atualizada.`);
	} else {
		alunos.push({ nome, nota }); // Adiciona um novo aluno à lista
		console.log('Ok! Aluno(a) cadastrado(a)...');
	}
} while (true);

console.log('-'.repeat(40));

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);

if (maior >= 7) {
	const destaques = alunos.filter((aluno) => aluno.nota == maior);

	for (const destaque of destaques) {
		console.log(`- ${destaque.nome}`);
	}
} else {
	console.log('Não há alunos de destaque na turma.');
}
