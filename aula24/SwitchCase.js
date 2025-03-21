const data = new Date()
const diaSemana = data.getDay()
console.log(data.toLocaleDateString("pt-br", {weekday:"long"}))