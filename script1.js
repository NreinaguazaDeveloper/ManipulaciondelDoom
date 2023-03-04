const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btncalcular');
const rest = document.querySelector('#result');
const form = document.querySelector('#form');


//escuchar los eventos.._|_
//btn.addEventListener('click', btnOnClick); //llamamos a una función cada vez que suceda el evento de click
                     //evento - //funcion   
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
   console.log(event);
   event.preventDefault(); //Esto lo que hace es que no ejecute por defecto - recargar la pag y cambiar la url
   const sumadeConst = input1.value + input2.value;
   rest.innerHTML= "resultado: "+ sumadeConst;

}


