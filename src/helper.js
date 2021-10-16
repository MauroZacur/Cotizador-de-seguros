export function obtenerDiferenciaYear (year) {

    return new Date().getFullYear() - year;

}

//total a pagar segun el modelo

export function calcularModelo(modelo){
    let incremento

    switch (modelo) {
        case 'alta':
             incremento = 1.30;
            break;
        case 'media':
            incremento = 1.15;
            break;
         case 'utilitario':
             incremento= 1.05;
            
             break;
    
        default:
            break;
    }

    return incremento;
}


//tipo de plan

export function obtenerPlan (plan){
    return (plan === 'basico') ? 1.20 : 1.50
}


export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}