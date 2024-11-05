//Método que se chama "log" que está dentro do objeto "console".
// O poto e vírgula no JavScript é opcional, mas é interessante utilizar.
console.log();

/*Para exibição de texto no console é nessesário utilizar uma das três
opções a baixo para que seja reconhecido como uma string*/
console.log('Vanessa Sousa'); //aspas simples
console.log("Vanessa Sousa"); //aspas duplas
console.log(`Vanessa Sousa`); //crase

/*A diferença entre essas três formas de declarar uma string é:

- Sempre que quiser utilizar aspas simples dentro do texto no console trocar para aspas duplas o envolvimento da string ex: console.log("Vanessa's").*/
console.log("Vanessa's");

/*
- Sempre que quiser utilizar aspas duplas dentro do texto do console trocar para aspas simples o envolvimento da string ex: console.log('Vanessa "Sousa"').*/
console.log('Vanessa "Sousa"');

/*
- No caso da crase é utilizada ara fazer lago mais avançado como templates strings e dentro de crase pode ser utilizado tanto aspas simoles quanto aspas duplas ex: console.log(`'Vanessa' "Sousa"`).*/
console.log(`'Vanessa' "Sousa"`);

/*Já o print de números é feito da seguite forma:*/
console.log(123456); //Não necessita da utilização de nenhum tipo de caracter especial.

/*Já o print de números reais ou números de ponto flutuante é feito da seguite forma:*/
console.log(15.850); //Utilize ponto (.) e não virgula (,). 
