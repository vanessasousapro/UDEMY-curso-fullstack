let nome = 'João'; //declarando e inicializando a variável.

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com',nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

let comida; //declarando a variável.
comida = 'arroz'; //inicializando a variável.
console.log(comida);
comida = 'feijão';
console.log(comida);

//Regras das variáveis

/*
Não pode criar variáveis com palavras reservadas:
Ex:
- let let = 'variável'
- let console = 'log'
- let function = 'função'
- let if = 'else'
*/

/*Variáveis precisam ter nomes significativos
- let n = 'João'; XXX
- let nomeCliente = 'João'; OKOK
*/

/*Não pode começar o nome de uma variáveis com um número
- let 1nome = 'João'; XXX
*/

/*Não podem conter espaços ou traços
- let nome Cliente = 'João'; XXX
- let nome-Cliente = 'João'; XXX
*/

/*Case-sensitive
- let nomeCliente = 'Luiz' é diferente de let nomecliente = 'Luiz'
*/

/*Não podemos redeclarar variáveis com let*/
/*NÃO UTILIZE VAR, UTILIZE LET*/