//Em vez de fazermos isso utilizamos a estrutura de objetos:
const nome01 = 'Vanessa';
const sobrenome01 = 'Sousa'
const idade01 = 27;

const nome02 = 'Leticia';
const sobrenome02 = 'Amancio'
const idade02 = 27;
//-----------------------------------------------------------------------------------

//Modelo de objeto literal para deixar o código mais organizado e entendível.
//Dentro desse objeto vamos criar atributos que são como variaveis que estão dentro do objeto.
//Para acessar o conteúdo desse objeto utilizamos ponto e o que desejamos acessar.
const pessoa2 = {
    nome: 'Vanessa',
    sobrenome: 'Sousa',
    idade: 27
};
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
//-----------------------------------------------------------------------------------

//Também podemos criar uma função que cria esses objetos (função fectory)
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa('Vanessa', 'Sousa', 27);

console.log(pessoa3.nome);
//-----------------------------------------------------------------------------------
//Quando temos uma função dentro de um objeto podemos chamar de método
const pessoa4 = {
    nome: 'Vanessa',
    sobrenome: 'Sousa',
    idade: 27,

    fala () {
        console.log(`minha idade atual é ${this.idade}`);
    },

    incrementoIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();