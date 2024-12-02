// Primitivos (imutáveis): string, number, boolean, undefined, null, (bigint, symbol) - valor. -> Copiados

//Neste caso específico não estamos mudando o dado em si
// Imagine nossa variável como uma caixa, e colocamos um adesivo chamado 'Vanessa' dentro da caixa, depois tiramos este adesivo e substituímos pelo adesivo 'Leticia'.
let nome = 'Vanessa';
nome = 'Leticia';
console.log(nome);

/**Neste outro exemplo podemos ver que realmente a string é imutável
//Neste caso queriamos mudar o índice [0] da string de 'L' para 'R' mas isso não acontece pelo comportamento de dados primitivos serem (imutáveis).*/
let nome1 = 'Leticia';
nome1[0] = 'R';
console.log(nome[0]);

//Neste caso ambas as váriaveis são independentes
let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra Coisa';
console.log(a, b);

// Referência (mutável) - Array, object, function -> Passados por referência.
//Neste caso específico quando o valor de uma das variáveis é alterado, os dois valores vão apontar para o mesmo lugar na memória.
let array = [1, 2, 3];
let b1 = array;
console.log(array ,b1);

//Neste caso variável b1 também será afetada pelo valor adiciona a variável array
array.push(4);
console.log(array, b1);

//Conclusão - Os valores primitivos eles são copiados quando a gente passa o valor dele para outra variável utilizando sinal de atribuição. Então vai depender do tipo de dados que será atribuído  a variável para saber se o valor vai ser copiado ou se vai ser passado por referência.