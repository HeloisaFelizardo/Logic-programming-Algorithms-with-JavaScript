const frm = document.querySelector('form');
const imClube = document.querySelector('#imgClube');
const dvTitulo = document.querySelector('#divTitulo');

const trocarClube = () => {
	let clube;
	if (frm.rbBrasil.checked) {
		clube = 'Brasil';
	} else if (frm.rbPelotas.checked) {
		clube = 'Pelotas';
	} else {
		clube = 'Farroupilha';
	}

	dvTitulo.className = `row cores-${clube}`;

	imClube.src = `img/${clube.toLowerCase()}.png`;
	imClube.className = 'img-fluid';
	imClube.alt = `Simbolo do ${clube}`;

	localStorage.setItem('clube', clube);
};

frm.rbBrasil.addEventListener('change', trocarClube);
frm.rbPelotas.addEventListener('change', trocarClube);
frm.rbFarroupilha.addEventListener('change', trocarClube);
