/* Acrescentar no site da Loja de Esportes um contador de visitas do cliente ao site. Assim, na primeira visita do cliente à loja, exibir em um paragrafo do site a mensagem: "Bem-vindo! Esta é a sua primeira visita."  Nas proximas visitas, exibir: "Que bom que você voltou! Você visitou esta página X vezes."*/
const inRadios = document.querySelectorAll('input'); // captura tags input da página
const imClube = document.querySelector('#imgClube');
const dvTitulo = document.querySelector('#divTitulo');
const contador = document.querySelectorAll('h5')[1];

const contadorVisitas = () => {
	if (localStorage.getItem('visitas')) {
		let visitas = parseInt(localStorage.getItem('visitas'));
		visitas++;
		localStorage.setItem('visitas', visitas);
		contador.textContent = `Que bom que você voltou! Você visitou esta página ${visitas} vezes.`;
	} else {
		// Se não, define a contagem inicial
		localStorage.setItem('visitas', 1);
		contador.textContent = 'Bem-vindo! Esta é a sua primeira visita.';
	}
};

const trocarClube = () => {
	const clubes = ['Brasil', 'Pelotas', 'Farroupilha']; // vetor com a lista de clubes

	let selecao;
	// percorre os inRadios para verificar qual está selecionado
	for (let i = 0; i < inRadios.length; i++) {
		if (inRadios[i].checked) {
			selecao = i; // se selecionado, armazena índice do radio selecionado
			break; // e sai da repetição
		}
	}

	if (selecao <= 2) {
		// se selecao <= 2, então torce por algum clube
		dvTitulo.className = `row cores-${clubes[selecao]}`; // modifica a cor
		// muda a propriedade src com a imagem do clube selecionado
		imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
		imClube.className = 'img-fluid'; // muda estilo para exibir imagem
		imClube.alt = `Símbolo do ${clubes[selecao]}`; // texto alternativo
		localStorage.setItem('clube', clubes[selecao]); // salva nome do clube
	} else {
		// else (selecionou "Nenhum")
		dvTitulo.className = 'row'; // tira a classe de cor de divTitulo
		imClube.className = 'd-none'; // oculta a imagem
		imClube.alt = ''; // limpa texto alternativo
		localStorage.removeItem('clube'); // remove variável do localStorage
	}
};

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
	inRadio.addEventListener('change', trocarClube);
}

const verificarClube = () => {
	if (localStorage.getItem('clube')) {
		// se já estiver salvo algum clube
		const clube = localStorage.getItem('clube'); // obtém o nome do clube

		// conforme o clube, marca um dos elementos do input type radio
		if (clube == 'Brasil') {
			inRadios[0].checked = true;
		} else if (clube == 'Pelotas') {
			inRadios[1].checked = true;
		} else {
			inRadios[2].checked = true;
		}
		trocarClube(); // chama a function que troca a imagem e cores
	}
	contadorVisitas();
};
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener('load', verificarClube);
