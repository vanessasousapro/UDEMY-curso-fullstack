const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML = `<p>Raiz Quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>Número é Inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondar para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondar para cima: ${Math.ceil(numero)}</p>`;