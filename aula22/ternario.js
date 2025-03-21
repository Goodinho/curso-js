

function verificarIdade(idade){
    const verificador = idade >= 18? "Maior de idade" : "Menor de idade"
    return verificador;
}

console.log(verificarIdade(18)); 

/* 
unction verificarIdade(idade) {
    return `Você é ${idade >= 18 ? "Maior" : "Menor"} de idade`;
}

console.log(verificarIdade(17)); // "Você é Menor de idade"
console.log(verificarIdade(20)); // "Você é Maior de idade"
*/