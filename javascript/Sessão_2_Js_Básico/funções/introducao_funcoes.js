// Funções são uma forma poderosa de encapsular lógica e tornam o código mais organizado, reutilizável e fácil de manter.

//Para declarar uma função, usamos a sintaxe:
function nomeDaFuncao() {
    //corpo da função
};
//-----------------------------------------------------------------------------------

//Exemplo de função simples com return:
// Se eu quero que a minha função faça alguma coisa e retorne alguma coisa utilizamos a palavra reservada return.
function saudacao (nome) {
    return `Bom dia ${nome}!`;
}
const mensagem = saudacao('Vanessa');
console.log(mensagem);

//Por padrão, se uma função não retornar nada explicitamente, ela retorna undefined. Se quisermos que a função devolva um valor, usamos a palavra-chave return.

// A função é reutilizável em qualquer lugar do código ou seja podemos chamar ela novamente em qualquer lugar do código e podemos passar qualquer valor para o parametro.

//Sempre que queremos mandar alguma informação junto com a função passamos como parâmetro dentro de parenteses.
//Quando chamamos a função também passamos o argumento / valor para o parâmetro.
//Dentro da função podemos executar quantas linhas de código quisermos.
//O mais legal é que o que esta dentro de chaves está protegido ou seja tudo que está dentro da função pertense a função, não conseguimos acessar o que está detro da função fora da função.
//Para chamarmos essa função é necessario utilizar parenteses para que a linguagem entenda que essa função está sendo executada.
//-----------------------------------------------------------------------------------

//função de soma:
function soma (x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(4, 2);
console.log(resultado);
//-----------------------------------------------------------------------------------

//função para saber a raiz quadrada de um número:
const raiz = n = n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));