// 2. Clasificación de frutas:


// Crea una variable que almacene un arreglo de frutas. Recorre el arreglo e imprime en la consola
// cada fruta utilizando el método log. Luego, clasifica las frutas en dos categorías (cítricas y no
// cítricas) y crea dos nuevos arreglos para almacenarlas. Imprime ambos arreglos en la consola
// utilizando el método table.


// let frutas={mango:"no citrico", 
// banano:"no citrica", 
// fresas:"citrica", 
// limon:"citrica", 
// pera:"no citrica",
// manzana:"no citrica",
// naranja:"citrica"}

let frutas= ["mango", "banano", "fresa", "limon", "pera", "manzana", "naranja"]
for (let fruta of frutas){
   console.log(fruta)
 }
// console.log(frutas)
console.table(frutas)

let citrica=[
    "fresas citrica",
    "limon citrica",
    "naranja citrica"
]
    
let noCitrica=[
    "mango no citrico",
    "banano no citrica",
    "pera no citrica",
    "manzana no citrica"
]
console.table(`${citrica} ${noCitrica}`)    
console.table(citrica)
console.table(noCitrica)


