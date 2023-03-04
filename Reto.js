// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno 
//(no se vale imprimir el objeto completo).

const obj = {
    nombre: 'mondongo',
    cantidad : 3,
    sopadeldia : ['sopa de mondongo','changua','sopa de guineos','levanta muertos']
};

Object.values(obj);

function imprimirtodo(obj){
    const arra = Object.values(obj);
    for(let i = 0; i<arra.length;i++){
        console.log(arra[i])
    }
}