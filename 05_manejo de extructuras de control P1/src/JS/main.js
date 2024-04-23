// console.groupCollapsed("if", "else if", "else")

// console.log(8 < 10) //verdadero

// console.log("8" >= 6) //verdadero


// if (true) {
//     console.info("La condición es verdadera")
// }

// if (9 > 2) {
//     console.info("La condición es verdadera")
// }

// console.groupEnd()

// console.groupCollapsed("JORNADA LABORAL")

// let hora =13
// if (hora > 8 && hora < 17) {
//     console.info("Estoy en mi jornada laboral")
// }else {
//     console.info("No estoy en mi jornada laboral")
// }

// console.groupEnd()

// console.groupCollapsed("MESES DEL AÑO")

// let mes = "febrero"
// if (mes == "febrero") {
//     console.info("es febrero")
// }else if (mes == "marzo") {
//     console.info("es marzo")
// }else if ("abril"){
//     console.info("es abril")
// }else if (mes == "mayo") {
//     console.info("es mayo")
// }else {
//     console.log("Ingresaste un mes incorrecto")
// }


// let numeroDelMes = prompt("ingresa el numero del mes que quieres validar")

// if (numeroDelMes == 1 || numeroDelMes ==2 || numeroDelMes ==3) {
//     console.log("Estas en el primer trimestre del año")
// }
// else if(numeroDelMes == 4 || numeroDelMes == 5 || numeroDelMes == 6) {
//     console.log("Estas en el segundo trimestre del año")
// }
// else if(numeroDelMes == 7 || numeroDelMes == 8 || numeroDelMes == 9) {
//     console.log("Estas en el tercer trimestre del año")
// }
// else if(numeroDelMes == 10 || numeroDelMes == 11 || numeroDelMes == 12) {
//     console.log("Estas en el cuarto trimestre del año")
// }
// else {
//     console.log("Ingrese un numero del 1 al 12")
// }

//-------------------------SWITCH--------------------------->
// switch (numeroDelMes){
//     case 1:
//         console.log("estas en el primer trimestre del año")
//         break;
//     case 2:
//         console.log("estas en el primer trimestre del año")
//         break;
//     case 3:
//         console.log("estas en el primer trimestre del año")
//         break;
//     default:
//         console.log("ingrese un numero del 1 al 12")
//         break;
// }

//console.groupEnd()

// ----------------------EJERCICIO MENU DE OPCIONES---------------------------
// console.groupCollapsed("OPCION MENÚ")
// let money = 500
// let optionMenu = prompt(`
//     [1] solicita almuerzo
//     [2] solicitar domicilio
//     [3] cancelar orden
//     [4] finalizar el programa
// `)

// switch (optionMenu) {                        //-----------SWITCH------------->
//     case "1" :
//         if (money >= 20) {
//             console.log("con gusto te atenderemos")
//         } else {
//             console.log("lo siento no podemos atenderte")
//         }
//         break;
//         // console.log("solicita almuerzo")
//         // break;
//     case "2" :
//         console.log("solicitar domicilio")
//         break;
//     case "3" :
//         console.log("cancelar orden")
//         break;
//     case "4" :
//         console.log("finalizar el programa")
//         break;
//     default:
//         console.log("ingrese un numero del 1 al 4")
//         break;
// }

// //---------------MENU CON FUNCION IF y ELSE------------------>

// if (optionMenu == "1" && money >= 20) {
//     console.log("con gusto te atenderemos")
// } 
// else if (optionMenu == "2" && money >= 5){
//     console.log("solicitar domicilio")
// }
// else if (optionMenu == "3"){
//     console.log("cancelar orden")
// }
// else if (optionMenu == "4"){
//     console.log("finalizar el programa")
// }
// else {
//     console.log("lo siento no podemos brindarte un servicio")
// }
// console.groupEnd()
 


//----------------SICLO FOR-------------------->

// console.groupCollapsed("HOLA MUNDO ESTA ES LA VUELTA")
// for (let i = 0; i < 10; i++) {
//     console.log("Hola mundo, esta es la vuelta ", i)
// }
// console.log(i)
// console.groupEnd()

//--------------SICLO WHILE SOLO LA tabla del 9-------------------->

// console.groupCollapsed("TABLA DEL 9 CON SICLO WHILE")
// console.info("TABLA DE NÚMERO 9")
// let i = 1
// while (i <= 10) {
//     console.log(`9 * ${i} = ${9 * i}`)
//     i++
// }
// console.groupEnd()

// -------------------------->TABLAS DE MULTIPLICAR------------------------------------->
// console.groupCollapsed("TABLAS DEL 1 AL 9 CON SICLO FOR")
// console.log("Tabla del número 1")
// // SICLO QUE ME IMPRIME LAS TABLAS
// for(let i = 1; i <= 10; i++) {
//     console.log(`1 X ${i} = ${1 * i}`)
// }

// console.log("")

// console.log("Tabla del número 2")

// for(let i = 1; i <= 10; i++) {
//     console.log(`2 X ${i} = ${2 * i}`)
// }

// console.log("")

// console.log("Tabla del número 3")

// for(let i = 1; i <= 10; i++) {
//     console.log(`3 X ${i} = ${3 * i}`)
// }

// console.log("")

// console.log("Tabla del número 4")

// for(let i = 1; i <= 10; i++) {
//     console.log(`4 X ${i} = ${4 * i}`)
// }

// console.log("")

// console.log("Tabla del número 5")

// for(let i = 1; i <= 10; i++) {
//     console.log(`5 X ${i} = ${5 * i}`)
// }

// console.log("")

// console.log("Tabla del número 6")

// for(let i = 1; i <= 10; i++) {
//     console.log(`6 X ${i} = ${6 * i}`)
// }

// console.log("")

// console.log("Tabla del número 7")

// for(let i = 1; i <= 10; i++) {
//     console.log(`7 X ${i} = ${7 * i}`)
// }

// console.log("")

// console.log("Tabla del número 8")

// for(let i = 1; i <= 10; i++) {
//     console.log(`8 X ${i} = ${8 * i}`)
// }

// console.log("")

// console.log("Tabla del número 9")

// for(let i = 1; i <= 10; i++) {
//     console.log(`9 X ${i} = ${9 * i}`)
// }

// console.groupEnd()

// --------------------FRASE CON SICLO FOR-------------->
// console.groupCollapsed("FRASE DE QUERER ALGO")
// for (let i = 1; i <= 1000; i++) {
//     console.log("Voy a tener mi 🏍️ muy pronto ❤️ con la ayuda de Dios🙏🏻")
// }

// console.groupEnd()

// console.groupCollapsed("FRASE DIRIGIDA A ALGUIEN")

// let conocida = ["Jesús", "María", "Jose"]

// for (let i = 0; i < conocida.length; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.write(`Voy a tener mi 🏍️ ${conocida[i]} muy pronto ❤️ con la ayuda de Dios 🙏🏻`)
//     }
// }
// console.groupEnd()

