// Exercício com math
let num1 = window.prompt('Digite um número: ');
document.body.innerHTML+=`<H1><strong>Seu numero é ${num1}<strong/> <H1/>`
document.body.innerHTML+=`Raiz quadrada: ${num1 ** 0.5} <br/>`;
document.body.innerHTML+=`${num1} é inteiro: ${Number.isInteger(parseFloat(num1))} <br/>`;
document.body.innerHTML+=`É NaN: ${Number.isNaN(num1)} <br/>`;
document.body.innerHTML+=`Arredondando para baixo: ${Math.floor(num1)} <br/>`;
document.body.innerHTML+=`Arredondando para cima: ${Math.ceil(num1)} <br/>`;
document.body.innerHTML+=`Com duas casas decimais: ${num1.toFixed(2)} <br/>`;
console.log(typeof num1)

