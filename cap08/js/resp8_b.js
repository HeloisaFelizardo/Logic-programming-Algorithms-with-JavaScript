/* Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo numero de vogais do nome completo dele. O programa deve contar as funções: validarNome(), obterSobrenome() e contarVogais() */

const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const aluno = frm.inAluno.value;

	if (!validarNome(aluno)) {
		alert('Informe o nome completo do aluno');
		frm.inAluno.focus();
		return;
	}
	// o retorno das funções é utilizado na exibição da resposta
	resp.innerText = 'Senha Inicial: ' + obterSobrenome(aluno) + contarVogais(aluno);
});

const validarNome = (nome) => {
	const regex = / /g;
	return nome.match(regex);
};

const obterSobrenome = (nome) => {
	const fullName = nome.split(' ');
	const lastName = fullName[fullName.length - 1];
	return lastName.toLowerCase();
};

const contarVogais = (nome) => {
	const regex = /[aeiou]/g;
	const count = (nome.match(regex) || []).length;
	return count < 10 ? `0${count}` : count.toString();
};

//const count = (nome.match(regex) || []).length;
/* Essa linha de código está utilizando a função `match` de uma string em JavaScript para encontrar todas as ocorrências de um padrão definido pela expressão regular `regex`. Vamos entender cada parte:

1. **`nome.match(regex)`**: Isso retorna um array contendo todas as correspondências encontradas na string `nome` que atendem à expressão regular `regex`. Se não houver correspondências, o resultado será `null`.

2. **`|| []`**: O operador `||` é o operador de coalescência nula (nullish coalescing), que retorna o operando à esquerda quando ele não é nulo ou indefinido, caso contrário, retorna o operando à direita. Neste caso, se `nome.match(regex)` for `null` (não há correspondências), a expressão é avaliada como um array vazio `[]`.

3. **`.length`**: Finalmente, `length` é usado para obter o comprimento do array resultante. Portanto, `count` conterá o número de correspondências encontradas na string.

Resumindo, a linha de código está contando o número de vogais na string `nome` que correspondem ao padrão definido pela expressão regular `regex`. Se não houver vogais, `count` será igual a zero. Essa abordagem é segura mesmo se não houver correspondências, evitando erros de chamada de `length` em `null` ou `undefined`. */
