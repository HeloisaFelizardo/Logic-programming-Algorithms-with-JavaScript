const frm = document.querySelector('form');
const divIdade = document.querySelector('#divIdade');

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	const idade = frm.inIdade.value;
	createIdade(idade);
});

const createIdade = (idade) => {
	for (let i = 0; i < idade.length; i++) {
		const img = document.createElement('img');
		img.src = `img/${Number(idade[i])}.jpg`;
		img.alt = `Vela de ${Number(idade[i])} anos`;
		divIdade.appendChild(img);
	}
	btExibir.disabled = true;
};

frm.addEventListener('reset', () => {
	location.reload();
});
