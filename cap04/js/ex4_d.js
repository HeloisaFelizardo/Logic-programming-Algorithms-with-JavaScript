const form = document.querySelector('form');
const resp1 = document.querySelector('#outSimNao');
const resp2 = document.querySelector('#outTipoTriangulo');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const a = Number(form.inLadoA.value);
	const b = Number(form.inLadoB.value);
	const c = Number(form.inLadoC.value);

	if (a > b + c || b > a + c || c > a + b) {
		resp1.textContent = 'Lados não podem formar um Triângulo';
		resp2.innerText = '';
	} else {
		resp1.innerText = 'Lados podem formar um triângulo';
		if (a === b && a === c) {
			resp2.innerText = 'Tipo: Equilátero';
		} else if (a === b || a === c || b === c) {
			resp2.innerText = 'Tipo: Isósceles';
		} else {
			resp2.innerText = 'Tipo: Escaleno';
		}
	}
});
