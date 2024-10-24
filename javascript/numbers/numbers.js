let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1 + num2);

//No exemplo acima como são dois números naturalmente será realizada uma soma entre os dois números mas neste caso queremos o contrário. Para isso vamos explorar algumas soluções:

//Neste caso vamos utilizar a função toString() para converter o valor armazenado na variável num3 que é um número para uma string.
//Utiliando essa fução não estamos editando o valor armazenado na variável estamos retornando temporariamente como podemos ver no exemplo: console.log(typeOf num3);
let num3 = 1; //number
let num4 = 2.5; //number

console.log(num3.toString() + num4);
console.log(typeof num3);

//Para alterar o valor da variável para sempre utilizamos:
let num5 = 1;
num5 = num5.toString();

//Exemplo para alterar para número bonário
let num6 = 10;
console.log(num6.toString(2));

//Exemplo para arredondar o valor utilizando a função toFixed() e dentro dos parenteses passamos quantas casas decimais queremos.
let num7 = 10.5789551255547;
console.log(num7.toFixed(2));

//Exemplo de como saber se o número é inteiro no console retorna boolean
let num8 = 10;
console.log(Number.isInteger(num8));

//Exemplo de tratamento ao NaN com a função isNaN() que no console retorna um boolean. 
let temp = num8 * 'Ola';
console.log(Number.isNaN(temp)); //Não faça contas com strings, isso não é uma boa pratica de programação.

//Padrão IEEE 754-2008 faça uma explicação sucinta sobre esse padrão em javascript.

//Testando imprecisão do padrão de números do javascript
let num9 = 0.7; //number
let num10 = 0.1; //number
console.log(num9 + num10); //Saída: 0.79999999999999999

//Testando imprecisão do padrão de números do javascript
let num11 = 0.7; //number
let num12 = 0.1; //number
num11 += num12; // num11 = num11 + num12;
num11 += num12;
num11 += num12;
console.log(num11);

//Exemplo tentando resolver a imprecisão com toFixed();
let num13 = 0.7; //number
let num14 = 0.1; //number
num13 += num14; // num11 = num11 + num12;
num13 += num14;
num13 += num14;

num13 = num14.toFixed(2);

console.log(num13);
console.log(Number.isInteger(num13));

//Exemplo resolvendo utilizando num15 = parseFloat(num15.toFixed(2)); também podemos resolver com num15 = Number(num15.toFixed(2));
let num15 = 0.7; //number
let num16 = 0.1; //number
num15 += num16; //0.8 // num11 = num11 + num12;
num15 += num16; //0.9
num15 += num16; //1.0

num15 = parseFloat(num15.toFixed(2));

console.log(num15);
console.log(Number.isInteger(num15));

//Exemplo resolvendo utilizando num17 = ((num17 * 100) + (num18 * 100)) / 100;
let num17 = 0.7; //number
let num18 = 0.1; //number

num17 = ((num17 * 100) + (num18 * 100)) / 100;

console.log(num17);
console.log(Number.isInteger(num17));
