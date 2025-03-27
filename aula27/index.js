// Atribuição via desestruturação (Obejtos)
const pessoa = {
    nome:'Eduardo',
    sobrenome:'Godinho',
    idade: 20, 
    endereco: {
        rua: 'José de alencar',
        numero: 54        
    }
};

const {nome: eduardo, endereco: {rua, numero}, ...resto} = pessoa;
console.log(eduardo +', ' +   rua, numero)
console.log(resto)