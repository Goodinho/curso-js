/*
 Tipos primitivos (Imutáveis) - Number, string, boolean, undefined, null (bigint, symbol) - Valores copiados

 Referência (mutável) - array, object, function - passados por referência 
*/

/*
let nome = "Eduardo";
let nome2 = nome; // copia o valor e guarda
nome = "Ferdinando" // mesmo mudando o nome nome2 nao será afetado, pq ja tem seu valor guardado antes
console.log(nome, nome2) // Ferdinando, Eduardo
*/
let a = [1, 2, 3];
let b = [...a]; // [...a] ta siguinificando que b copiou o valor de A, igual com os valores imutáveis
let c = b; 
console.log(a, b);

a.push(4)
console.log(a, b);

b.pop(); 
console.log(a, b);

a.push("luiz")
console.log(c) // Mas o c ainda esta apontando para b