/*
*Aritméticos
* ( ) Tudo que esta dentro dos parenteses será executado primeiro.
* (**) Potenciação (Quando queremos elevar um número)
* (*) Multiplicação
* (/) Divisão
* (%) Resto da divisão
* (+) Adição (Soma e concatenação)
* (-) Subtração
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
//Neste caso os números serão somados

const num3 = '15';
const num4 = 20;
console.log(num3 + num4);
/*Neste caso por conter uma string em uma das variáveis será feito a ação de concatenação.*/

//Exemplo (%)
const num5 = 25;
const num6 = 30;
console.log(num5 % num6);

//Exemplo -> Preferência aritmética
const num7 = 5;
const num8 = 2;
const num9 = 10;
console.log(num7 + num8 * num9);
/*Neste caso o resultado não será (70) e sim (25) pois os operadores tem 
preferência de execução sendo aqui a prefrência da multiplicação sendo maior que a de adição -> (2 * 10 = 20 + 5 + 25)*/

//Exemplo -> Para alterar a preferência
const num10 = 5;
const num11 = 2;
const num12 = 10;
console.log((num7 + num8) * num9);
//Neste caso é adiciona parenteses para que a soma seja feita antes da multiplicação.

//Incremento (++) +1
let contador = 1;
++contador; // 2
++contador; // 3
contador++; // 4
contador++; // 5
console.log(contador);

//Decremento (--) -1
let contadora = 5;
--contadora; // 4
--contadora; // 3
contadora--; // 2
contadora--; // 1
console.log(contadora);

//Incrementando mais de 1
let contadores = 0;
contadores += 5 //contador = contador + 2;
contadores += 5 
contadores += 5
console.log(contadores);

//NaN -> Not a Number
const num13 = 10;
const num14 = parseInt('5'); // Função que converte a string para um número Inteiro
const num15 = parseFloat('5.2'); // Função que converte a string para um número de ponto flutuante(decimais).
console.log(num13 + num14);
console.log(typeof num14);