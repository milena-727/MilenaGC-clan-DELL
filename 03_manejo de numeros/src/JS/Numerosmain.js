//--------------#CREACION DE NUMEROS----------------->

// let numero1 = 45
// let numero2 = Number(45)
// let numero3 = new Number(45)

// console.info(numero1)
// console.info(typeof(numero1))
// console.info(numero2)
// console.info(numero3)

// let numero1 = 41115555555555

// console.info(Number.MAX_VALUE)
// console.info(Number.MIN_VALUE)

//-------------------------#OPERACIONES MATEMATICAS--------------->

// const numero1 = 5
// const numero2 = Number("10")


// console.info(numero1 + numero2)
// console.info(numero1 - numero2)
// console.info(numero1 * numero2)
// console.info(numero1 / numero2)

// numero1 = 45
// let numero1 = Number.parseInt(prompt("ingresa tu numero"))
// let numero2 = Number.parseFloat(prompt("ingresa tu numero decimal"))
// let numero2 = 89.75

// console.info(typeof(numero1))
// console.info(typeof(numero2))

// # -------------------PARA VALIDAR QUE TIPO DE NUMERO ES------------>

// console.info(Number.isInteger(numero1))
// console.info(Number.isInteger(numero2))


//let numero = 9427
//console.info(numero.toString())
//console.info(numero.toString(2)) //ASI SE CONVIERTE A BINARIO
//console.info(numero.toString(8)) //ASI SE CONVIERTE EN OCTAL
//console.info(numero.toString(16)) //ASI SE CONVIERTE EN HEXADECIMAL


// const numeroEjemplo = 512
// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toFixed(2))
// console.info(numeroEjemplo.toFixed(3))  //ASI SE INDICA PARA PASAR EN DECIMAL
// console.info(numeroEjemplo.toFixed(4))
// console.info(numeroEjemplo.toFixed(5))
// console.info(numeroEjemplo.toFixed(6))
// console.info(numeroEjemplo.toFixed(7))
//console.info(numeroEjemplo.toFixed(100))


// const numeroEjemplo = 27
// console.info(numeroEjemplo)                      //ESTO ES EXPONENCIAL
// console.info(numeroEjemplo.toExponential())
// console.info(numeroEjemplo.toExponential(45))
// console.info(numeroEjemplo.toExponential(100))


// const numeroEjemplo = 88888888888888888

// console.info(numeroEjemplo.toPrecision(5))
// console.info(numeroEjemplo.toExponential())


// ----------------------# LA CLASE MATH------------------>


//console.log(2*2*2*2)
//console.log(Math.pow(2,200)) //PARA POTENCIAR UN NUMERO MÁS FACIL
//console.log(2**20)           //OTRA FORMA DE POTENCIAR UN NUMERO

//console.log(Math.sqrt(7))    //PARA SACAR RAIZ CUADRADA

//console.log(Math.cbrt(68))   //PARA SACAR LA RAIZ CUBICA - EL CUBO

//console.log(Math.cos(1516))  //PARA SACAR EL COSENO

//console.log(Math.abs(-85))   //PARA SACAR EL ABSOLUTO LA VERSION POSITIVA


// let numero = 78

// if (78>0){
//     console.log("es positivo")
// } else {
//     console.log("es negativo")
// }
// console.log(Math.sign(numero)) 


// --------------------#PARA SACAR EL NUMERO MAYOR Y MENOR------------->

// console.log(Math.max(48, 99, 55, 7, 66, 77, 4))
// console.log(Math.min(48, 99, 55, 7, 66, 77, 4))



//--------------------# PARA REDONDEAR NUMEROS--------------->

//let numero = 3.7
//document.write(numero)

//console.info(Math.round(numero))  //PARA REDONDEAR NUMEROS DECIMALES
//console.info(Math.floor(numero))  //PARA REDONDEAR HACIA ABAJO EJ 2.999 = 2
//console.info(Math.ceil(numero))    // PARA REDONDEAR HACIA ARRIBA


//--------------------#RANDOW NUMEROS ALEATORIOS------------------->

//let numero = Math.round(Math.random() * 100)
//document.write(numero)

//---------------------# PARA SACAR NUMEROS ALEATORIOS DE UN RANGO ENTRE OTRO RANGO------->

let numero = Math.round(Math.random() * (10 - 20) + 20)
document.write(numero)
// let numero = Math.round((Math.random(10-20) + 20)) 
// console.log(numero)









