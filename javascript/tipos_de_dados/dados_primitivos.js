//string, number, undefined, null, boolean, symbol

//Strings
const nome = 'Vanessa'; //aspas simples
const nome1 = "Vanessa"; //aspas duplas
const nome2 = `Vanessa`; //crase

//Numbers
const num = 10;
const num1 = 10.52;

//Undefined
let nomePessoa; //Undefined -> Não aponta para local nenhum na memória.
let sobrenomePessoa = null; //Nulo -> Não aponta para local nenhum na memória.
/*Diferença null e undefined
* Quando a variável é (null) explicitamente definimos que a variável não tem valor.
* Quando a variável é (undefined) não definimos nada a própria linguagem define.
*/

//Boolean (lógico)
const boolean = true;
const boolean1 = false;

//Exemplo em aula
let a = 2;
let b = a;
console.log(a, b); //2, 2

a = 3;
console.log(a, b); //3, 2