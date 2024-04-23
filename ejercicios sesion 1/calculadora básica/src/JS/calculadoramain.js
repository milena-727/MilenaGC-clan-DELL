// CALCULADORA

// 1. Calculadora básica:

// Crea una calculadora que permita al usuario ingresar dos números y realizar las operaciones
// básicas (suma, resta, multiplicación y división). Imprime el resultado de cada operación en la
// consola utilizando los métodos de impresión adecuados (info, error, warn, debug, table, log) según
// corresponda.

let num1= parseInt(prompt("ingresa el primer numero"))
let num2= parseInt(prompt("ingresa el segundo numero"))

let suma= num1+num2
let resta= num1-num2
let multiplicacion= num1 * num2
let division= num1/num2 

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.info(`Resultados: ${suma} ${resta} ${multiplicacion} ${division}`)

