let umaString = "Um \"texto\"";
console.log(umaString);


let stringIndexada = 'Um texto';
console.log(stringIndexada[4]);

//Exemplos de concatenação:
let umaString1 = 'Um texto';
console.log(umaString1.concat('em um lindo dia.'));//Função concat()
console.log(umaString1 + 'em um lindo dia.');//Utilizando sinal de +
console.log(`${umaString1} em um lindo dia.`);//Utilizando template string.

//Qual o índice da palavra texto:
let umaString2 = 'Um texto';
console.log(umaString2.indexOf('texto'));

//lastindexOf() começa de trás para frente.
let umaString3 = 'Um texto';
console.log(umaString3.lastIndexOf());

//Expressão regular
let umaString4 = 'Um texto';
console.log(umaString4.match(/[a-z]/g));

let umaString5 = 'Um texto';
console.log(umaString5.search(/[a-z]/g));

let umaString6 = 'Um texto';
console.log(umaString6.replace('Um', 'Outro'));
console.log(umaString6.replace(/Um/, 'Outro'));

let umaString7 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString7.replace(/r/g, '#'));

let umaString8 = 'O rato roeu a roupa do rei de roma.';
console.log()

//Utilizando length()
let umaString9 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString9.length);//.length() é um atributo r não uma função.

//Utilizando slice()
let umaString10 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString10.slice(2, 6));

let umaString11 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString10.slice(-5, umaString10.length - 12));
console.log(umaString10.slice(-5, -1));

let umaString12 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString12.substring(umaString12.length - 5, umaString12.length -1));

//Utilizando split()
let umaString13 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString13.split(' ', 3));

//Utilizando toUpperCase()
let umaString14 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString14.toUpperCase());

//Utilizando toUpperCase()
let umaString15 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString15.toLowerCase());