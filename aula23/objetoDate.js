// função construtor
// "new" serve pra chamar a função construtora
// Ela precisa começar com a letra maiuscula 
// Essa função tem muita coisa e seu conteúdo tem no mozilla 
/*
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
*/

//const data = new Date();
//console.log(data.toString()); // horario atual 

//const data = new Date(2019, 3);// ano, mês, dia, minutos,  segundos, milisegundos
//console.log(data.toString()); // horario atual 

/*
const data = new Date(1742594555996)
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // MêS começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // milesimos de segundos do dia unix até a data atual 
*/
 
function zeroAEsquerda (num){
  return num >= 10 ? num:`0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate ());
    const mes = zeroAEsquerda(data.getMonth ()+1);
    const ano = zeroAEsquerda(data.getFullYear ());
    const hora = zeroAEsquerda(data.getHours ());
    const min = zeroAEsquerda(data.getMinutes ());
    const seg = zeroAEsquerda(data.getSeconds ());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
 }
 const data = new Date();
 const dataBrasil = formataData(data);
 

 console.log(dataBrasil);
