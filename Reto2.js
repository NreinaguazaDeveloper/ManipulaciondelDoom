// ### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function Tipodesuscripcion(suscrip){    
    if(suscrip == 'Free'){
        console.log('Solo puedes tomar los cursos gratis')
        return; //Esto lo qe hace es detener el condicional.
    }
    if(suscrip == 'Basic'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes')
        return; //Esto lo qe hace es detener el condicional.
    }
    if(suscrip == 'Expert'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un año')
        return; //Esto lo qe hace es detener el condicional.
    }
    if(suscrip == 'ExpertPlus'){
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
        return; //Esto lo qe hace es detener el condicional.
    }
}