// const text = document.querySelector('.container ')
// const data = new Date();
// const diasSemanas = ["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

// const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubto", "Novembro", "Dezembro"];


// const mesTexto = meses[data.getMonth()];
// const diaSemanaTexto = diasSemanas[data.getDay()];
// const diaMes = data.getDate();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minutos = data.getMinutes().toLocaleString('pt-br', {minimunIntenegerDigits: 2});
// console.log(diaSemanaTexto+", " + diaMes, mesTexto +" de "+ ano, "\n"+ hora+":"+minutos);

// text.innerHTML = `<p>${diaSemanaTexto}, ${diaMes} de ${mesTexto} ${ano} <br> ${hora}:${minutos}</p>`

const h1 = document.querySelector('.container ')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes)
console.log(opcoes)

