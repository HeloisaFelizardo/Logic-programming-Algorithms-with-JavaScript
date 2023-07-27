const form = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

form.addEventListener('submit', (e) => {
	const titulo = form.inTitulo.value;
	const duracao = Number(form.inDuracao.value);

	const horas = Math.floor(duracao / 60);
	const minutos = duracao % 60;

	resp1.innerText = titulo;
	resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`;

	e.preventDefault();
});
