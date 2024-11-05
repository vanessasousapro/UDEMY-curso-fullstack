let alunos = ['Luiz', 'Maria', 'João'];
alunos = 123;
console.log(typeof alunos);
console.log(alunos instanceof Array);

// delete alunos[1]; Deleta item do Array. Saída: [ 'Luiz', <1 empty item>, 'João' ].
// alunos.shift(); Remove o primeiro item do Array. Saída: [ 'Maria', 'João' ].
// console.log(alunos[2]); Acessa um item do Array: Saída: João.
// alunos[3] = 'Fernanda'; Adiciona um item ao Array. 
// alunos[0] = 'Eduardo'; Adiciona um item ao Array. Saída: [ 'Eduardo', 'Maria', 'João', 'Fernanda' ]
// alunos[alunos.length] = 'Fábio'; Para saber o tamanho do array.
// alunos[alunos.length] = 'Luíza';
// alunos[alunos.length] = 'Eduardo';