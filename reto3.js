//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
const tipossuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic : 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert : 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function Mostrarsusp(suscripciones){
    if(tipossuscripciones[suscripciones]){
        console.log(tipossuscripciones[suscripciones])
        return
    }
}