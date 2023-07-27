const prompt = require('prompt-sync')();
const veiculo = prompt('Veículo: ');
const preco = Number(prompt('Preço: '));
const entrada = preco * 0.5;
const parcela = entrada / 12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${parcela.toFixed(2)}`);
