/* Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio, exibir umna caixa de seleção como os convênios "Amigos dos Animais" e "Saúde Animal". O programa deve exibir o valor do desconto (10% sem convênio; 20% para "Amigo dos animais"; 50% para "Saúde Animal") e o valor a ser pago. Crie a função calcularDesconto() que recebe dois parâmetros, valor e taxa de desconto. Retornar o valor do desconto. */
const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.rbSim.addEventListener('click', () => {
	frm.inConvenio.className = 'exibe';
});

frm.rbNao.addEventListener('click', () => {
	frm.inConvenio.className = 'oculta';
});

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	const valor = Number(frm.inPreco.value);
	let percentual = 0;
	if (frm.rbSim.checked) {
		const convenio = frm.inConvenio.value;
		percentual = convenio === 'saude' ? 50 : convenio === 'amigos' ? 20 : null;
	} else {
		percentual = 10;
	}
	const desconto = calcularDesconto(valor, percentual);

	resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`;
	resp2.innerText = `A Pagar R$: ${(valor - desconto).toFixed(2)}`;
});

const calcularDesconto = (valor, percentual) => (percentual / 100) * valor;
