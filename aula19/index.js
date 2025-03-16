//Avalição de curto-circuito
/*const corUsuario = null; // null representa um valor "falsy". 
const corPadrao = corUsuario || "vermelho"; // Como a variável "corUsuario" não tem um valor verdadeiro, o operador lógico análisa a próxima condição e passa sua resposta para para a váriavel "corPadrao". 

console.log(corPadrao); // vermelho
*/
function boaTarde() { // função para dar boa tarde definida
    return "Boa Tarde!"
}
const vaiExecutar = 12 >= 12 && boaTarde(); // verifica se conta está certa, como ela é verdadeira, passa para verificar o próximo
console.log(vaiExecutar)