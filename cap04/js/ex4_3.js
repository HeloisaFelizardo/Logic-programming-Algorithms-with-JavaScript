const prompt = require('prompt-sync')();
const bairro = prompt('Bairro de Entrega: ');

let taxaEntrega;

switch (bairro) {
	case 'Centro':
		taxaEntrega = 5.0;
		break;
	case 'Fragata':
		taxaEntrega = 7.0;
		break;
	case 'Laranjal':
		taxaEntrega = 10.0;
		break;
	default:
		taxaEntrega = 0.0;
}

console.log(`Taxa R$: ${taxaEntrega.toFixed(2)}`);
