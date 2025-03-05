/*
function saudação (){
    console.log("Bom dia");
}
saudação()
*/

/*
function saudação (nome){
    console.log(`Bom dia ${nome}!`);
}
saudação("Eduardo");
*/

/*
function saudação (nome){
    console.log(`Bom dia ${nome}!`);
    return nome
}
const variavel = saudação("Eduardo");
console.log(variavel)
*/

/*
function saudação (nome){
    return (`Bom dia ${nome}!`);
}
const variavel = saudação("Eduardo");
console.log(variavel)
*/

/*
function raiz(x) {
    console.log(`A raiz de ${x} é :`)
    return conta = x ** 0.5
}
var conta = raiz(64);
console.log(conta)
*/

/*
function soma (y, x){
    resultado = y + x 
    return resultado
}
console.log(soma(3, 4))
console.log(soma(1, 7))
console.log(soma(6, 3))
*/

/*
function soma (y = 1, x = 3){ // caso nao seja passado os parametros, os números estão para auxilio 
    resultado = y + x 
    return resultado
}
console.log(soma()) // não foi passado 
console.log(soma(2))// foi passado apenas o de "y" então só um ele tera um valor reatribuido
console.log(soma(2, 6)) // padrão, os dois números passados nos parametros serão ignorados
*/

/*

const raiz = function (n) { // Outro jeito que declarar funções 
    return x ** 0.5
}

console.log(raiz(9))
*/
const raiz = n => n ** 0.5; // Maneira mais morderna de declarar funções (Arrow Function (=>))

console.log(raiz(9))
