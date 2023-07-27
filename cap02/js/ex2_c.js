const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
	const produto = frm.inProduto.value;
	const preco = Number(frm.inPreco.value);

	const precoComDesconto = preco - preco * 0.5;

	const valorTotal = preco * 2 + precoComDesconto;

	resp1.textContent = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`;
	resp2.textContent = `O 3° produto custa apenas R$: ${precoComDesconto.toFixed(2)}`;
	e.preventDefault();
});
