// Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){ 
  e.preventDefault(); // Não deixa a pagíana ser carregada 
  const inputPeso = e.target.querySelector('#peso'); // Seleciona o input com id "peso"
  const inputAltura = e.target.querySelector('#altura'); // Seleceiona input com id "altura"
  
  const peso = Number(inputPeso.value); // Transforma o valor do input em Number e passa para variável "peso"
  const altura = Number(inputAltura.value);// Transforma os valor do input em Number e passa para variável "altura" 

  if (!peso) { // Verifica se os valores são falsos, se sim, retorna no html como erro, pedindo para inserir os dados certos. 
    setResultado ('Peso inválido', false);
   return; 
  } 
  if (!altura) { // Verifica se os valores são falsos, se sim, retorna no html como erro, pedindo para inserir os dados certos.
    setResultado ('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura); // Passa os argumentos de peso e altura para função "getImc". A função faz a conta e passa o valor para variável "imc".
  const nivelImc = getNivelImc(imc) // Chama a função getNivelImc com o argumento de imc, dependendo do valor de imc getNivelImc vai mandar uma string com o nivel do imc da pessoa. 
 
const msg = `Seu IMC é ${imc} (${nivelImc}.)` // Manda a msg pro navegador 
  setResultado (msg, true); // Chama a função para passar se vai ter um erro ou não


});

function getNivelImc(imc){ // Um array com os niveis do imc com o parametro imc
    const nivel = [
      'Abaixo do peso',
      'Peso normal',
      'Sobrepeso',
      'Obesidade grau 1', 
      'Obesidade grau 2', 
      'Obesidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5]  // verifica o nivel e retorna o valor certo para imc
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0];

    
}

function getImc(peso, altura) { // Uma função para criar o IMC
     const imc = peso / altura ** 2; 
     return imc.toFixed(2);
}
function criaP () { // Função cria parágrafo
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid){ // válida a msg
    const resultado = document.querySelector('#resultado'); 
    resultado.innerHTML = '';
    
    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
