let num1 = 9.54578;
let num2 = Math.floor(num1); // Método floor arrendonda o valor para baixo
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num1); // Método ceil arredonda o calor para cima
console.log(num2);

let num5 = 9.51;
let num6 = Math.round(num1); // Método round arredonda para o mais próximo.
console.log(num2);

//Quando uma função está dentro de uma objeto é chamada de método.

// Método max pega o maior número de uma sequência de números
let num7 = 9.49;
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Método min pega o menor número de uma sequência de números
let num8 = 9.49;
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

//Método randon utilizado para gerar números aleatórios entre 0 e 1
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); 
// expressão para buscar um número aleatório entre 10 e 5;
// Pata arredondar inserimos toda a expressão dentro de Math.round()
console.log(aleatorio);

console.log(Math.PI);// Método para pegar o valor de PI.

//Método que eleva um número a outro número pow(x: number, y: number).
console.log(Math.pow(2, 10));// 2 elevado à 10.

//utilizando o operador aritmético ficaria da seguinte forma.
console.log(2 ** 10);

//Método para pegar a raiz quadrada de um número.
let num10 = 9;
console.log(num10 ** 0.5);

//utilizando o operador aritmético ficaria da seguinte forma.
let num9 = 9;
console.log(num9 ** (1/2));

//Atenção: Em javascript você pode dividir um núnmero por zero.
console.log(100 / 0); // Console: Infinity
//Não da erro a einda é avaliado como (true) verdadeiro.
