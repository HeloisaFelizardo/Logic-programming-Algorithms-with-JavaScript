/* Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, que pode ser "Infantil"(até 12 anos), "junenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos). O programa deve conter as funcões: gerarTracos() e categorizarAluno()  */

const frm = document.querySelector('form'); // obtém elementos da página
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
	e.preventDefault(); // evita envio do form

	const atleta = frm.inAtleta.value;
	const idade = Number(frm.inIdade.value);

	const sublinhado = gerarTracos(atleta);
	const categoria = verCategoria(idade);

	resp.innerText = atleta + '\n' + sublinhado + '\nCategoria: ' + categoria;
});

/* Essa versão utiliza o método replace com uma expressão regular para substituir cada caractere por um traço, exceto os espaços. Isso elimina a necessidade do uso do array tracos e do join. */
const gerarTracos = (nome) => {
	return nome.replace(/./g, (char) => (char === ' ' ? ' ' : '-'));
};

const verCategoria = (idade) => {
	let categoria;
	if (idade <= 12) {
		categoria = 'Infantil';
	} else if (idade <= 18) {
		categoria = 'Juvenil';
	} else {
		categoria = 'Adulto';
	}
	return categoria;
};
