const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	const nome = frm.inNome.value;
	const nota1 = Number(frm.inNota1.value);
	const nota2 = Number(frm.inNota2.value);
	const media = (nota1 + nota2) / 2;

	resp1.textContent = `Média das Notas ${media.toFixed(2)}`;

	if (media >= 7) {
		resp2.textContent = `Parabéns ${nome}! Você foi aprovado(a)`;
		resp2.style.color = 'blue';
	} else if (media >= 4) {
		resp2.textContent = `Atenção ${nome}. Você está em exame.`;
		resp2.style.color = 'green';
	} else {
		resp2.textContent = `Ops ${nome}... Você foi reprovado(a)`;
		resp2.style.color = 'red';
	}
});
