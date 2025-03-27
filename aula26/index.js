// Atribuição via desestruturação (Arrays)
// let a = "A";
// let b = "B";
// let c = "C";

// let letras = [b, c, a];
// [a,b,c] = letras;
// console.log(a, b , c);

//               0  1  2  3  4  5  6  7  8  // indice 
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // valor
// const [primeiroNumero, segundoNumero, ...resto] = numeros;  // são criadas constanstes para receber os valores dos indices 0 e 1 
// console.log(primeiroNumero, segundoNumero);
// console.log(resto)
// ;
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
// const numeros = [[5, 6, 7], [1, 4, 3], [2, 8, 9]]
// console.log(numeros[1][1])

// const numeros = [[5, 6, 7], [1, 4, 3], [2, 8, 9]]
// const [,[,varParaPegarNumero]] = numeros; // 
// console.log(varParaPegarNumero);

const numeros = [[5, 6, 7], [1, 4, 3], [2, 8, 9]]
const [lista1, lista2, lista3] = numeros; 
console.log(lista2[1]);

