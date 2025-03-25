/*
const data = new Date('1987-04-06 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo";
        
        break;
    
        case 1:
        diaSemanaTexto = "Segunda";
        
        break;

        case 2:
        diaSemanaTexto = "Terça";
        
        break;

        case 3:
        diaSemanaTexto = "Quarta";
        
        break;

        case 4:
        diaSemanaTexto = "Quinta";
        break;

        case 5:
        diaSemanaTexto = "Sexta";
        
        break;

        case 6:
        diaSemanaTexto = "Sábado";
        
        break;
    default:
        break;
}
console.log(diaSemana, diaSemanaTexto);
*/
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto; 
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            
            return diaSemanaTexto;
        
            case 1:
            diaSemanaTexto = "Segunda";
            
            return diaSemanaTexto;
    
            case 2:
            diaSemanaTexto = "Terça";
            
            return diaSemanaTexto;
    
            case 3:
            diaSemanaTexto = "Quarta";
            
            return diaSemanaTexto;
    
            case 4:
            diaSemana = "Quinta";
            return diaSemanaTexto;
    
            case 5:
            diaSemanaTexto = "Sexta";
            
            return diaSemanaTexto;
    
            case 6:
            diaSemanaTexto = "Sábado";
            
            return diaSemanaTexto;
       
}
}
const data = new Date('1987-04-06 00:00:00');
let diaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);