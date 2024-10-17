const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); // a função typeof é uitlizada para ver qual o tipo de valor da variável.
console.log(typeof segundoNumero);

//Regras das constantes

/*
Não pode criar constantes com palavras reservadas:
Ex:
- const const = 'variável'
- const console = 'log'
- const function = 'função'
- const if = 'else'
*/

/*constantes precisam ter nomes significativos
- const n = 'João'; XXX
- const nomeCliente = 'João'; OKOK
*/

/*Não pode começar o nome de uma constante com um número
- const 1nome = 'João'; XXX
*/

/*Não podem conter espaços ou traços
- const nome Cliente = 'João'; XXX
- const nome-Cliente = 'João'; XXX
*/

/*Case-sensitive
- const nomeCliente = 'Luiz' é diferente de let nomecliente = 'Luiz'
*/

/*Não podemos modificar o valor de uma contante*/
/*A constante já deve ser declarada e incializada*/
/*NÃO UTILIZE VAR, UTILIZE CONST*/