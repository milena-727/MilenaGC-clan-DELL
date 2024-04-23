//----------------------MANEJO DE STRINGS----------------->

let ejemplo = 45
console.log(ejemplo)

// ------------------#DECLARACION DE STRINGS-------------->

// const option1="hola mundo"
// const option2= String("hola mundo")
// const option3= new String("hola mundo")

// console.info(option1)
// console.info(option2)
// console.info(option3)

// --------------------------#EXTRACION DE DATOS----------------->

// const message = "Este es un mensaje de pruebas"
// document.write(message)

//-----------EXTRAER LA CANTIDAD DE CARACTERES----->


// console.info(message.length)


//----------------------------#EXTRAER UN CARACTER---------------->

// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("mensaje"))
// console.info(message.includes("mensaje de prueba"))
// console.info(message.startsWith("Este"))
// console.info(message.endsWith("Este"))

//----------------------#INTERPOLACION CON CADENAS, CONCATENACION------------->

// const messageOne = "Este es un mensaje para"
// const messageTwo = "Practicar concatenacion"
// const fullName = "Milena González Castrillón"
// console.info("opcion 1 (+): " + messageOne + " " + messageTwo)
// console.info("opcion 2 (,): " , messageOne, messageTwo)
// console.info(`opcion 3 (\`): ${messageOne} ${messageTwo}`)
// console.info("opcion 4 concat() simple ", messageOne.concat(" ").concat(messageTwo))
// console.info("opcion 5 concat() abreviada ", messageOne.concat(" ", messageTwo))

// const header = `
// <header>
//     <h1>Hola mundo, mi nombre es ${fullName}</h1>
// </header>`

// document.write(header)

//-------------------------------#DEPURACION DE STRINGS----------------->

// const message = "HolA coMo esTaS"
// document.write(message)
// console.info(message.toLowerCase())
// console.info(message.toUpperCase())


//-------------------------------LIMPIEZA DE ESPACIOS------------------->

// const message = "  milena029427@gmail.com"

// console.info(message)
// console.info(message.trimStart())
// console.info(message.trimEnd())
// console.info(message.trim())


//-----------------------------#FRAGMENTACION DE UN STRING------------------>

// const message = "anita lava la tina porque se porto mal"
// document.write(message)

// console.info(message.substring(9))
// console.info(message.substring(0,10))

// console.info(message.slice(9))
// console.info(message.slice(0,10))

// console.info(message.replace("a","e"))
// console.info(message.replaceAll("a","e"))
// console.info(message.replaceAll(/[aeiou]/g,"p"))

//-----------------------------------#RELLENO DE STRING-------------------->

// const message = "Riwi - "
// console.info(message)

// console.info(message.repeat(70))
// console.info(message.padStart(10,"*"))
// console.info(message.padEnd(10,"*"))


//----------------------------------------#DESTRUCCION TOTAL-------------------->

const message = "En riwi todos somos una familia"
document.write(message)

console.info(message.split(""))   // SEPARA LETRA POR LETRA
console.info(message.split(" "))    //SEPARA POR PALABRAS
console.info(message.split(" ", 2)) //SOLO DOS PALABRA SE INDICA CANTIDAD
console.table(message.split(""))    //SEPARA VERTICAL LETRA POR LETRA EN UNA TABLA










