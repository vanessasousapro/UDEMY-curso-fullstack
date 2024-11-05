let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

//Opção 1
// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;
// console.log(varA, varB, varC);

//Opção 2
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);