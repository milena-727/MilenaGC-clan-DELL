let variable1 = 156
let variable2 = 854
let variable3 = "hola mundo"
let variable4 = true
let variable5 = undefined
let variable6 = null 
let variable7 = ["hola","hola","hola","hola","hola","hola","hola","hola"]
let variable8 = {"milena":"gonzalez",}
let variable9 = function name(){

}

console.log("variable 1: ", typeof variable1)
console.log("variable 2: ", typeof variable2)
console.log("variable 3: ", typeof variable3)
console.log("variable 4: ", typeof variable4)
console.log("variable 5: ", typeof variable5)
console.log("variable 6: ", typeof variable6)
console.log("variable 7: ", typeof variable7)
console.log("variable 8: ", typeof variable8)

console.groupEnd()


// -------------------# OPERADORES ARITMETICOS--------------->

console.group("Operadores aritmeticos")
let numero1 = 10
let numero2 = 15

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let residuo = numero1 % numero2

console.log("suma:", suma)
console.log("resta:", resta)
console.log("multiplicacion:", multiplicacion)
console.log("division:", division)
console.groupEnd


//--------------OPERADORES DE INCREMENTO Y DECREMENTO------------->

console.group("operadores de incremento y decremento")

//-----------------INCREMENTO------------------------>

let numeroQueVaHaIncrementar = 10
let numeroQueVaHaDesender = 100
document.write(numeroQueVaHaIncrementar)

numeroQueVaHaIncrementar++ // 11
numeroQueVaHaIncrementar++ // 12
numeroQueVaHaIncrementar++ // 13
numeroQueVaHaIncrementar++ // 14
numeroQueVaHaIncrementar++ // 15
numeroQueVaHaIncrementar+=2 //17
numeroQueVaHaIncrementar = numeroQueVaHaIncrementar + 2
numeroQueVaHaIncrementar+=2 //19
numeroQueVaHaIncrementar++ //20

// --------------------------DECREMENTO------------>

numeroQueVaHaDesender--
numeroQueVaHaDesender--
numeroQueVaHaDesender--
numeroQueVaHaDesender-= 40
numeroQueVaHaDesender-= 40
numeroQueVaHaDesender-= 40
console.log(numeroQueVaHaDesender)


console.groupEnd

// -------------------OPERADORES LOGICOS--------------->

console.group("operadores logicos")

// ------------COMPARADOR DE IGUALDAD " == O ==="------------->

console.log(5 + 9 == 20) //falso
console.log(4 == 4) // verdadero
console.log(4 == "4") // verdadero
console.log(4 === "4") //falso
console.log("Hola mundo" == "hola mundo") //falso

// ----------------COMPARADOR DE DIFERENCIA "!= O !== "------------>

console.log(2 != 9) // verdadero
console.log(2 != 2) // falso
console.log(2 !== "2")

const contraseña = "12345"
const contraseñaConfirmacion = "12345"

if (contraseña === contraseñaConfirmacion) {
    console.error("usuario registrado")
}

// -----------------------COMPARADOR MAYOR QUE---------------->

console.log(8 > 5) // verdadero
console.log(8 > 8) // falso
console.log(8 >= 8) // verdadero

// -----------------COMPARADOR MENOR QUE------------------->

console.log(8 < 5) //falso
console.log(8 < 8) //falso
console.log(8 <= 8) // verdadero

let edad = 12

if (edad < 18){
    console.error("tiene peligro que lo agarre la policia")
}else if (edad >= 18) {
    console.warn("puedes ingerir alcohol, pero tambien lo puede agarrar el ejercito")
}
console.groupEnd()

// ------------------OPERADORES LOGICOS-------------------->

console.group("operadores logicos")


// OPERADOR AND
//         verdadero && falso = falso
console.log(1 < 5 && 8 < 2)

            // falso                  verdadero         falso
console.log("usuario" == "admin" && "1234" == 1234 && "Rol" == true ) // falso


// OPERADOR OR
//          falso  verdadero   falso   falso = verdadero
console.log(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50)

//------------------------ MESCLADAS-------------------------->

//                             FALSO ----------- || --------------verdadero = verdaadero
//              falso    &&        verdadero       verdadero        verdadero
console.log(("usuario" == "Usuario" && 5 > 2) || ("rol" === "rol" && 6 == "6"))


//--------------------------NOT---------------------------------->

let variable = false
console.log(!variable) // verdadero

console.groupEnd()

let numeroFactura = "123458"
numeroFactura = parseInt(numeroFactura)
console.log(numeroFactura === 123458) // verdadero
console.groupEnd()


