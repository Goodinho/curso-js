/*
const pessoa1 = {
    nome: "Eduardo",
    sobrenome: "Godinho",
    idade: 20
}
console.log(pessoa1.nome)
*/
/*function criePessoa(nome, sobrenome, idade, CPF) {
    return {
         nome, 
         sobrenome, 
         idade,
         CPF
    };
}

const pessoa1 = criePessoa('Luiz', 'Otávio', 25, 1230549549393);
const pessoa2 = criePessoa('Edu', 'ardo', 20)
console.log("",pessoa1,"\n",pessoa2);
*/
const pessoa1 = {
    nome: "Eduardo",
    sobrenome: "Godinho",
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementeIdade(){
        ++this.idade
    }
};
pessoa1.fala();
pessoa1.incrementeIdade();
pessoa1.fala()
pessoa1.incrementeIdade();
pessoa1.fala()
pessoa1.incrementeIdade();
pessoa1.fala()
pessoa1.incrementeIdade();
pessoa1.fala()
