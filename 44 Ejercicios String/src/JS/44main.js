//Ejercicios de Javascript para realizar en consola:

console.log( "(✿◡‿◡)") 

// 1.	Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes
// y muestra en consola el resultado de sumarlos.

let num1 = 70
let num2 = 23
let suma = num1+num2
console.log("Resultado suma:",suma)

// 2.	Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. 
//Muestra en consola la longitud total de ambas cadenas.

let simpleString1 = "Hola"
let simpleString2 = "Mundo"

console.log(`Longitud total de "Hola": ${simpleString1.length} Longitud total de "Mundo": ${simpleString2.length}`)

// 3.	Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript
//y stringUsingString2 con el valor "Ejercicios".

// const stringUsingString1 = String("JavaScript")
// const stringUsingString2 = String("Ejercicios")

// console.log(stringUsingString1)
// console.log(stringUsingString2)

// 4.	Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar"
//y stringUsingNewString2 con el valor "Strings".

const stringUsingString1 = new String("Concatenar")
const stringUsingString2 = new String("Strings")

console.info(stringUsingString1)
console.info(stringUsingString2)

// 5.	Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

console.log(simpleString1.search("la"))

// 6.	Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.

console.log(simpleString2.substring(2))


// 7.	Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.


console.info(simpleString1.concat(" ",simpleString2))

// 8.	Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.

let frase = simpleString1 +" "+ simpleString2

console.log(frase)

// 9.	Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.

const simpleString1_ = "Hola"
const simpleString2_ = "mundo"

const resultado = `${simpleString1_} ${simpleString2_}`
console.log("Concatenar las variables simpleString1 y simpleString2 resultado: ",resultado)

// 10.	Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ".
//Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

let stringWithSpaces1 = " TrimStart"
let stringWithSpaces2 = "TrimEnd "
stringWithSpaces1 = stringWithSpaces1.trimStart()
stringWithSpaces2 = stringWithSpaces2.trimEnd()

console.log("Eliminando espacios:",stringWithSpaces1)
console.log("Eliminando espacios:",stringWithSpaces2)

// 11.	Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.

let palabra = "Hola"
palabra = palabra.replace("o", "i")
console.log("Reemplaza la letra 'o' por la letra 'i' en la frase (hola) respuesta: ",palabra)

// 12.	Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

let simpleString = "Mundo"
let primerosTresCaracter = simpleString.slice(0, 3)
console.log("Primeros tres caracteres de la palabra Mundo: ",primerosTresCaracter)

// 13.	Utiliza el método substring() para obtener una subcadena de la variable simpleString2 
//que comience en el índice 2 e imprime el resultado en consola.

let message = simpleString2
console.info("Subcadena de Mundo es: ",message.substring(2))

// 14.	Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.

let frase1 = simpleString1
let resultado1 = simpleString1.repeat(2)
console.log("Repite la variable simpleString1 dos veces:",resultado1)

// 15.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

let cadena = "Esto es una oración de ejemplo"
console.info(cadena.split(" "))

// 16.	Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

let variable = simpleString2
let mayusculas1 = variable.toUpperCase()
console.log("Palabra en mayúsculas: ",mayusculas1,"(❁´◡`❁)")

// 17.	Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let variable1 = simpleString1
let minusculas = variable1.toLowerCase()
console.log("Palabra en minusculas: ",minusculas,"(●'◡'●)")

// 18.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let booleano = true
console.log("Tipo de dato: ",typeof booleano, "( $ _ $ ) ")

// 19.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo1 = ["luna", "lluvia", "invierno", "frio"]
console.log("Longitud del array: ",arreglo1.length)

// 20.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let miObjeto = {
    propiedad1: "Dolares",
    propiedad2: "Euros",
    propiedad3: "LibraEsterlina"
}

console.log("Una de las propiedades del objeto: ",miObjeto.propiedad1, "( $ _ $ )ƪ(˘⌣˘)ʃ")

// 21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nuLo = null
console.log("Tipo de dato: ",typeof nuLo, "^_^")

// 22.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido1
console.log("Tipo de dato utilizando el operador typeof(): ",typeof indefinido1)

// 23.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let varDecimal = 10.7
console.log("Tipo de dato U_U:",typeof varDecimal)

// 24.	Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().

let negativo = -7
console.log("Tipo de dato O_O:",typeof negativo)


// 25.	Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

let cadena_ = "Casa"
let posicionDeA = cadena_.indexOf("a")
console.log("Posición del carácter 'a' en la cadena (Casa): ",posicionDeA)

let palaBra = "Casa"
console.log("Posición del carácter 'a' en la cadena (Casa): ",palabra.indexOf("a"))

// 26.	Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.

let caDena = "Javascript"
let substring = "Script"
let incluye = caDena.includes(substring)
console.log("La cadena (Javascript) incluye el substring (Script): ",incluye)

// 27.	Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

let uno = "Hola"
let dos = "Mundo"
console.log("Cadenas concatenadas: ",uno.concat(" ",dos))

// 28.	Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.

let uno1 = "Hola"
let dos1 = "Mundo"
console.log("Cadenas concatenadas con el operador (+): ",uno + " " + dos)

// 29.	Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.

let cadena1_ = "Hola"
let cadena2_ = "Mundo"
let resulTado = (`${cadena1_} ${cadena2_}`)
console.log("Template strings para concatenar las cadenas Hola y Mundo: ",resulTado)

// 30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ".
//Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final,
//respectivamente, e imprime el resultado en consola.

let cadenaConEspacios = " Ejemplo con espacios "
console.log(cadenaConEspacios.trimStart())
console.log(cadenaConEspacios.trimEnd())

// 31.	Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.

let cadeNa = "El cielo es azul"
let reemplaza = cadeNa.replace("azul", "rojo")
console.log("Reemplaza la palabra (azul) por (rojo) en la cadena (El cielo es azul): ",reemplaza)

// 32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.

let caracteres = "Programación"
console.log("Los últimos cuatro caracteres de la cadena (Programación): ",caracteres.slice(-4))

// 33.	Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript"
//que comience en el índice 2 e imprime el resultado en consola.

let cadenaJS = "JavaScript"
console.info("Subcadena de JavaScript es: ",cadenaJS.substring(2))

// 34.	Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.

let frase_ = simpleString1
let resultado_ = simpleString1.repeat(3)
console.log("Repite la cadena Hola tres veces:", resultado_)

// 35.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

let cadena1 = "Esto es una oración de ejemplo"
let arrayDePlabras = cadena1.split(" ")
console.info(arrayDePlabras)

// 36.	Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

let js = "Javascript"
let mayusculas = js.toUpperCase()
console.log("Palabra en mayúsculas: ",mayusculas,"☆*: .｡. o(≧▽≦)o .｡.:*☆")

// 37.	Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let cadenA = "EJEMPLO"
console.log("cadena (EJEMPLO) a minúsculas: ",cadenA.toLowerCase())

// 38.	Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().

let numero = 7
console.log("Su tipo de dato es: ",typeof numero)

// 39.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let miBooleano = true
console.log("Tipo de dato: ",typeof miBooleano)

// 40.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo = ["sol", "agua", "arena"]
console.log("Longitud del array: ",arreglo.length)

// 41.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto = {
    yo: "blanca",
    soy: "alta",
    asi: "inteligente"
}
console.log("Una de las propiedades del objeto: ",objeto.asi)

// 42.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo = null
console.log("Su tipo de dato es: ",typeof nulo)

// 43.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido
console.log("Su tipo de dato es: ",typeof indefinido)

// 44.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal = 7.7
console.log("Su tipo de dato es: ",typeof decimal)








































