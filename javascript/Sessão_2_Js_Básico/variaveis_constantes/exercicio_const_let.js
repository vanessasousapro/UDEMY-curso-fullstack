/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1994
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmMetros = 1.80;
let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2024 - idade;

//utilizando (+) como soma e/ou concatenação.
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg');

//utilizando (,) nesta opçãp tudo é a mesma coisa sem separação.
console.log('tem', alturaEmMetros, ' de altura e seu IMC é de ', indiceMassaCorporal);

/*utilizando template de strings (para puxar o valor da variável é necessário utilizar ${}) o restante envolto em crase é string.*/
console.log(`${nome} nasceu em ${anoNascimento}`);