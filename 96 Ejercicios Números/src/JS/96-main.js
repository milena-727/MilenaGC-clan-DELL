// Ejercicios con números en JavaScript


// 1. Sumar dos números.

let suma = 2 + 7
console.log(suma)

// 2. Restar dos números.

let resta = 9 - 4
console.log(resta)

// 3. Multiplicar dos números.

let multiplicar = 7 * 7
console.log(multiplicar)

// 4. Dividir dos números.

let dividir = 84 / 7
console.log(dividir)

// 5. Calcular el módulo (resto) de una división.

console.log(12 % 34)

// 6. Generar un número aleatorio entre 1 y 10.

let numero = Math.round(Math.random() * (1 - 10) + 10)
document.write("=>Numeros aleatorios entre 1 y 10: ",numero)

// 7. Elevar un número a la potencia de otro.

console.log("Un número a la potencia de otro (7): ",Math.pow(7,70))

// 8. Calcular la raíz cuadrada de un número.

console.log("la raíz cuadrada de un número (8): ",Math.sqrt(8))

// 9. Convertir grados Celsius a Fahrenheit.

// let celsius = parseFloat(prompt("Ingresa grados celsius"))
// let fahrenheit = (celsius * 9/5) + 32
// console.log(celsius + " celsius equivale a: " + fahrenheit + " fahrenheit")

// 10. Calcular el área de un círculo.

let radioC = 8
let areaC = Math.PI * Math.pow(radioC, 2)
console.log("El area del circulo es: ",areaC)

// 11. Calcular el perímetro de un cuadrado.

let lado1 = 2
let lado2 = 2
let lado3 = 2
let lado4 = 2
const perimetro = lado1 + lado2 + lado3 + lado4
console.log("El perímetro del cuadrado es: ",perimetro)

// 12. Calcular el volumen de una esfera.

let radio = 8
let volumen = (4 / 3) * Math.PI * Math.pow(radio,3)
console.log(" Resultado volumen esfera: " + volumen)

// 13. Calcular el área de un triángulo.

let base = 12
let altura = 32
let areaTriangulo = (base * altura / 2)
console.log("El area del triangulo es : " + areaTriangulo)

// 14. Generar la tabla de multiplicar del número 5.

console.log("Tabla del número 5")

for(let i = 1; i <= 10; i++) {
     console.log(`5 X ${i} = ${5 * i}`)
}

// 15. Encontrar el número mayor entre 3, 7 y 2.

console.log("El número mayor entre 3, 7 y 2 es el: ",Math.max(3, 7, 2))

// 16. Encontrar el número menor entre 10, 20 y 5.

console.log("El número menor entre 10, 20 y 5 es el: ",Math.min(10, 20, 5))

// 17. Calcular el promedio de 4, 6 y 8.

let promedio = ((4 + 6 + 8) / 3)
console.log("El promedio entre 4, 6, y 8 es: ",promedio)

// 18. Calcular la factorial de 5.

// El factorial de un número es el resultado de multiplicar dicho número por todos los anteriores.
// Por tanto, el factorial de 5 será 5x4x3x2x1
// El factorial de un número se representa con un signo de exclamación (!) detrás del número.
//ejemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120

let numfactorial = 5
let dato = 1
for (let i = numfactorial; i > 0; i--) {
    dato *= i
}
console.log("La factorial de 5 es: ",dato)

// 19. Redondear el número 3.6.

let redondear = 3.6
console.info("El número 3.6 redondeado da: ",Math.round(redondear))

// 20. Calcular el doble de 9.

let doble = 9 + 9
console.log("El doble de 9 es: ",doble)

// 21. Calcular el triple de 4.

let triple = 4 + 4 + 4
console.log("El triple de 4 es: ",triple)

// 22. Calcular el cuadrado de 6.

console.log("El cuadrado de 6 es: ",Math.sqrt(6)) 

// 23. Calcular el cubo de 3.

console.log("El cubo de 3 es: ",Math.cbrt(3))

// 24. Calcular la suma de los primeros 10 números naturales.

let sumaNaturales = (10* (10 + 1)) / 2
console.log("la suma de los primeros 10 números naturales es: ",sumaNaturales)

// 25. Calcular la resta entre 50 y 25.

let resta1 = 50 - 25
console.log("La resta entre 50 y 25 da como rsulatdo: ",resta1)

// 26. Multiplicar 7 por 9.

let multiPlicar = 7 * 9
console.log("El resultado de la multiplicacion 7 x 9 es: ",multiPlicar)

// 27. Dividir 144 por 12.

let division = 144 / 12
console.log("El resultado de la division 144/2 es: ",division)

// 28. Obtener el módulo de 17 dividido por 4.

let modulo = 17 % 4  // modulo se traduce a division
console.log("El módulo de 17 dividido por 4 es: ",modulo) 

// 29. Generar un número aleatorio entre 20 y 30.

let nuMero = Math.round(Math.random() * (20 - 30) + 30)
console.info("Numeros aleatorios entre 20 y 30: ",nuMero)

// 30. Elevar 2 a la potencia de 8.

console.log("Resultado de elevar 2 a la potencia de 8: ",Math.pow(2,8))

// 31. Calcular la raíz cuadrada de 144.

console.log("Raíz cuadrada de 144: ",Math.sqrt(144)) 

// 32. Convertir 100 grados Celsius a Fahrenheit.

let celsius = 100
let fahrenheit = (celsius * 9/5) + 32
console.log("100 grados Celsius a Fahrenheit es: ",fahrenheit)

// 33. Calcular el área de un rectángulo de base 5 y altura 10.

let baseRectangulo = 5
let alturaRectangulo = 10          //Formula b x h
let areaRectangulo = baseRectangulo * alturaRectangulo
console.log("El área del rectangulo de base 5 y altura 10 es:  ",areaRectangulo)

// 34. Calcular el perímetro de un círculo con radio 6.

let radioCirculo = 6
let perimetroCirculo = (2 * Math.PI * radioCirculo)
console.log("El perímetro de un círculo con radio 6 es: ",perimetroCirculo)

// 35. Calcular el volumen de un cubo con lado 4.

let lado = 4;
let volumenCubo = Math.pow(lado, 3);
console.log("El volumen de un cubo con lado 4 es: ",volumenCubo); 


// 36. Calcular el área de un rombo con diagonales de 8 y 10.
// FORMULA: A = (D1 X D2) / 2 
let D1 = 8
let D2 = 10
let areaRombo = D1 * D2 / 2
console.log("El área del rombo es: ",areaRombo)

// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4.

let base1 = 6
let base2 = 10
let alturaTrapecio = 4
let areaTrapecio = ((base1 + base2) / 2 * alturaTrapecio)
console.log("El área del trapecio es: ",areaTrapecio)

// 38. Generar la tabla de multiplicar del número 8.

console.log("Tabla del número 8")

for(let i = 1; i <= 10; i++) {
     console.log(`8 X ${i} = ${8 * i}`)
}

// 39. Encontrar el número mayor entre 15, 20 y 25.

console.log("El número mayor entre 15, 20 y 25 es: ",Math.max(15, 20, 25))

// 40. Encontrar el número menor entre 50, 75 y 100.

console.log("El número menor entre 50, 75 y 100 es: ",Math.min(50, 75, 100))

// 41. Calcular el promedio de 7, 9 y 12.

let promedio1 = ((7 + 9 + 12) / 3)
console.log("El promedio entre 7, 9, y 12 es: ",promedio1)

// 42. Calcular la factorial de 7.

let num = 7
let factorial = 1
for (let i = 1; i <= num; i++) {
    factorial *= i
}
console.log("la factorial de 7 es: ",factorial)

// 43. Redondear el número 7.9.

console.info("El número 7.9 redondeado da: ",Math.round(7.9))

// 44. Calcular el doble de 15.

let doble1 = 15 + 15
console.log("El doble de 15 es: ",doble1)

// 45. Calcular el triple de 6.

let triple1 = 6 + 6 + 6
console.log("El triple de 6 es: ",triple1)

// 46. Calcular el cuadrado de 8.

let resultado1 = 8 * 8
console.log("El cuadrado de 8 es: ",resultado1)

// 47. Calcular el cubo de 4.

let resultado1_ = 4 * 4 * 4
console.log("El cubo de 4 es:",resultado1_)

// 48. Calcular la suma de los primeros 15 números naturales.

let sumNaturales = (15* (15 + 1)) / 2
console.log("la suma de los primeros 15 números naturales es: ",sumNaturales)

// 49. Calcular la resta entre 100 y 55.

let resta_ = 100 - 55
console.log("La resta entre 100 y 55 es: ", resta_)

// 50. Multiplicar 6 por 8.

let multiplicacion = 6 * 8
console.log("Resultado de la multiplicación 6 X 8: ",multiplicacion)

// 51. Dividir 225 por 15.

let division1 = 225 / 15
console.log("Resultado de la división 225 / 15: ",division1)


// 52. Obtener el módulo de 20 dividido por 7.

let modulo1 = 20 % 7
console.log("El módulo de 20 dividido por 7 es: ",modulo1)


// 53. Generar un número aleatorio entre 40 y 50.

let num1 = Math.round(Math.random() * (40 - 50) + 50)
console.info("Numeros aleatorios entre 40 y 50: ",num1)

// 54. Elevar 3 a la potencia de 4.

console.log("3 a la potencia de 4 da como resultado: ",3**4)

// 55. Calcular la raíz cuadrada de 169.

let numero1 = 169
let raizCuadrada = Math.sqrt(numero1)
console.log("La raiz cuadrada de 169 es: ",raizCuadrada)

// 56. Convertir 80 grados Celsius a Fahrenheit.

let celsius1 = 80
let fahrenheit1 = (celsius1 * 9/5) + 32
console.log("80 grados Celsius a Fahrenheit da como resultado: ",fahrenheit1)

// 57. Calcular el área de un rectángulo de base 8 y altura 12.

let baseRectangulo1 = 8
let alturaRectangulo1 = 12          
let areaRectangulo1 = baseRectangulo1 * alturaRectangulo1
console.log("El área del rectangulo de base 8 y altura 12 es:  ",areaRectangulo1)

// 58. Calcular el perímetro de un círculo con radio 8.

let radioCirculo1 = 8
let perimetroCirculo1 = (2 * Math.PI * radioCirculo1)
console.log("El perímetro de un círculo con radio 8 es: ",perimetroCirculo1)

// 59. Calcular el volumen de un cubo con lado 5.

let lado_ = 5
let volumen_ = Math.pow(lado_, 3)
console.log("El volumen de un cubo con lado 5 es: ",volumen)


// 60. Calcular el área de un rombo con diagonales de 12 y 16.

let diagonal1 = 12
let diagonal2 = 16
//FORMULA ROMBO d1 * d2 / 2
let area_ = (diagonal1 * diagonal2) / 2
console.log("El área de un rombo con diagonales de 12 y 16 es: ",area_)

// 61. Calcular el área de un trapecio con bases 8 y 12 y altura 6.

let base1_ = 8
let base2_ = 12
let alturaTrapecio_ = 6
let areaTrapecio_ = ((base1_ + base2_) / 2 * alturaTrapecio_)
console.log("El área del trapecio con bases 8 y 12 y altura 6 es de: ",areaTrapecio_)

// 62. Generar la tabla de multiplicar del número 9.

console.info("TABLA DE NÚMERO 9")
let i = 1
while (i <= 10) {
    console.log(`9 * ${i} = ${9 * i}`)
    i++
}

// 63. Encontrar el número mayor entre 25, 30 y 35.

console.log("El número mayor entre 25, 30 y 35 es: ",Math.max(25, 30, 35))

// 64. Encontrar el número menor entre 80, 95 y 110.

console.log("El número menor entre 80, 95 y 110 es: ",Math.min(80, 95, 110))


// 65. Calcular el promedio de 8, 10 y 14.

let numero1_ = 8
let numero2_ = 10
let numero3_ = 14

let promedio_ = (numero1_ + numero2_ + numero3_) / 3
console.log("El promedio de 8, 10 y 14 es: ",promedio)


// 66. Calcular la factorial de 8.

let numeroFac = 8
let factorial_ = 1

for (let i = 1; i <= numeroFac; i++) {
    factorial_ *= i
}

console.log("La factorial de 8 es: ",factorial_)

// 67. Redondear el número 9.2.

console.info("El número 9.2 redondeado hacia abajo da: ",Math.floor(9.2))

// 68. Calcular el doble de 18.

let resultado = 18 * 2
console.log("El doble de 18 es: ",resultado)


// 69. Calcular el triple de 7.

let triple_ = 7 + 7 + 7
console.log("El triple de 7 es: ",triple_)

// 70. Calcular el cuadrado de 10.

let resultado_ = 10 * 10
console.log("El cuadrado de 10 es: ",resultado_)

// 71. Calcular el cubo de 5.

console.log("El cubo de 5 es: ",Math.pow(5, 3))

// 72. Calcular la suma de los primeros 20 números naturales.

let numNaturales = (20* (20 + 1)) / 2
console.log("la suma de los primeros 20 números naturales es: ",numNaturales)

// 73. Calcular la resta entre 200 y 75.

let restaNum = 200 - 75
console.log("El resultado de la resta entre 200 y 75 es: ",restaNum)

// 74. Multiplicar 9 por 11.

let numMul1 = 9
let numMul2 = 11
let resultadoNum = numMul1 * numMul2
console.log("Resultado de la multiplicación 9 x 11: ",resultadoNum)

// 75. Dividir 300 por 25.

let dividirNum = 300 / 25
console.log("Resultado de dividir 300 por 25 es: ",dividirNum)

// 76. Obtener el módulo de 30 dividido por 9.

let modulo_ = 30 % 9
console.log("Módulo de 30 dividido por 9 es: ",modulo_)


// 77. Generar un número aleatorio entre 60 y 70.

let numeroAle = Math.round(Math.random() * (60 - 70) + 70)
console.info("Números aleatorios entre 60 y 70: ",numeroAle)

// 78. Elevar 4 a la potencia de 5.

console.log("Elevar 4 a la potencia de 5 resultado: ",4**5)

// 79. Calcular la raíz cuadrada de 196.

let raizCuadrada1 = Math.sqrt(196)
console.log("La raíz cuadrada de 196 es: ",raizCuadrada1)

// 80. Convertir 120 grados Celsius a Fahrenheit.

let celsius_ = 120
let fahrenheit_ = (celsius_ * 9/5) + 32
console.log("Convertir 120 grados Celsius a Fahrenheit respuesta: ",fahrenheit_)

// 81. Calcular el área de un rectángulo de base 10 y altura 15.

var baseRec = 10
var alturaRec = 15
var area = baseRec * alturaRec
console.log("El área de un rectángulo de base 10 y altura 15 es: ",area)

// 82. Calcular el perímetro de un círculo con radio 10.

let radioCir = 10
let perimetroCirculo_ = 2 * Math.PI * radioCir
console.log("Perímetro del círculo con Radio 10 es: ", perimetroCirculo_)

// 83. Calcular el volumen de un cubo con lado 6.

let ladoCubo = 6
let volumenCubo1 = ladoCubo ** 3
console.log("Volumen del cubo con lado 6 es: ", volumenCubo1)

// 84. Calcular el área de un rombo con diagonales de 14 y 18.

let diagonal1_ = 14
let diagonal2_ = 18
let areaRombo_ = (diagonal1_ * diagonal2_) / 2
console.log("Área del rombo con diagonales de 14 y 18 es: ", areaRombo_)

// 85. Calcular el área de un trapecio con bases 10 y 15 y altura 8.

let baseMenor = 10
let baseMayor = 15
let alturaTrapecio1 = 8
let areaTrapecio1 = ((baseMayor + baseMenor) * alturaTrapecio1) / 2
console.log("Área del trapecio con bases 10 y 15 y altura 8 es: ", areaTrapecio1)

// 86. Generar la tabla de multiplicar del número 10.

console.log("Tabla del número 10")

for(let i = 1; i <= 10; i++) {
    console.log(`10 X ${i} = ${10 * i}`)
}

// 87. Encontrar el número mayor entre 35, 40 y 45.

let numerosVarios = (35, 40, 45)
let numeroMayor = Math.max(numerosVarios)
console.log("Número mayor entre 35, 40 y 45 es: ", numeroMayor)

// 88. Encontrar el número menor entre 90, 105 y 120.

console.log("El número menor entre 90, 105 y 120 es: ",Math.min(90, 105, 120))

// 89. Calcular el promedio de 9, 11 y 15.

let numeroPro1 = 9
let numeroPro2 = 11
let numeroPro3 = 15

let promedioResultado = (numeroPro1 + numeroPro2 + numeroPro3) / 3
console.log("El promedio de 9, 11 y 15 es: ",promedioResultado)

// 90. Calcular la factorial de 9.

let factorial1 = 1
for (let i = 1; i <= 9; i++) {
    factorial1 *= i
}
console.log("Factorial de 9 es: ", factorial)

// 91. Redondear el número 10.8.

let numeroRedondeado = Math.round(10.8)
console.log("Número redondeado 10.8 es:", numeroRedondeado)

// 92. Calcular el doble de 21.

let doble_ = 21 * 2
console.log("Doble de 21:", doble_)

// 93. Calcular el triple de 8.

let tripleCal = 8 * 3
console.log("Triple de 8:", tripleCal)

// 94. Calcular el cuadrado de 12.

let cuadrado = 12 ** 2
console.log("Cuadrado de 12:", cuadrado)

// 95. Calcular el cubo de 6.

let cubo = 6 ** 3
console.log("Cubo de 6:", cubo)

// 96. Calcular la suma de los primeros 25 números naturales.

let sumaNaturales1 = (25 * (25 + 1)) / 2
console.log("Suma de los primeros 25 números naturales:", sumaNaturales1)

// FIIIIINNNNNNNN