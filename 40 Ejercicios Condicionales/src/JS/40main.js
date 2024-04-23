// Ejercicios con Condicionales en JavaScript



// 1. Verifica si un número es positivo.

let positivo = 34
if ( positivo > 0 ) {
    console.log("El número es positivo")
}
else {
    console.log("El número no es positivo")
}

// 2. Verifica si un número es negativo.

let negativo = -34
if (negativo < 0) {
    console.log("El número es negativo")
}
else {
    console.log("El número es positivo")
}

// 3. Comprueba si un número es par.

let par = 2 
if (par % 2 === 0){
    console.log("Es par")
}
else {
    console.log("No espar")
}

// 4. Comprueba si un número es impar.

let impar = 7 
if (impar % 2 !== 0){
    console.log("Es impar")
}
else {
    console.log("No es impar")
}

// 5. Determina si un número es múltiplo de 5.

let numero = 10
if ( numero > 0 && numero % 5 == 0 ) {
    console.log("Si, el número " + numero + " es múltiplo de 5")
}
else{
  console.log("No, el número " + numero + " no es múltiplo de 5")
}

// 6. Verifica si un número es divisible entre 3.

let divisible = 6
if (divisible % 3 === 0) {
    console.log("Es " + divisible + " divisible por 3")
}
else {
    console.log("No es " + divisible + " divisible por 3")
}

// 7. Determina si un número es mayor que 100.

let mayor = 200
if (mayor >= 100) {
    console.log("Es " + mayor + " mayor que 100")
}
else {
    console.log("No es " + mayor + " mayor que 100")
}

// 8. Verifica si un número es menor que -50.

let menor = -60
if (menor < -50) {
    console.log("Es menor que -50")
}
else {
    console.log("Es mayor que -50")
}

// 9. Comprueba si un número está en el rango de 20 a 50.

let rango = 30
if (rango >= 20 && rango <= 50){
    console.log("El numero " + rango + " esta en el rango entre 20 y 50")
}
else {
    console.log("El número " + rango +  " no esta en el rango entre 20 y 50")
}

// 10. Determina si un número es igual a 0.

let igual = 5
if (igual === 0) {
    console.log(true);
} else {
    console.log(false);
}

// 11. Verifica si un número es mayor que -10 y menor que 10.

let numero_ = -1
if (numero_ >= -10 && numero_<= 10 ){
    console.log("EL número " + numero_ + " es mayor que -10 y menor que 10")
}
else {
    console.log("EL número " + numero_ + " no es mayor que -10 y no es menor que 10")
}

// 12. Determina si un número es un año bisiesto.

let año = 2024

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log("Es bisiesto");
} else {
    console.log("No es bisiesto");
}

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).

let persona = 30
if (persona >= 18){
    console.log("Es mayor de edad tiene " + persona + " años")
}
else {
    console.log("No es mayor de edad tiene " + persona + " años")
}

// 14.
// 15. Verifica si un número es un cuadrado perfecto.

let num1 = 4
let raizCuadrada = Math.sqrt(num1)
if (Number.isInteger(raizCuadrada)){  // Saber si es número entero
    console.log("Este número: " + num1 + " es un cuadrado perfecto")
}
else {
    console.log("Este número: " + num1 + " No es un cuadrado perfecto")
}

// 16. Determina si un número es un número de Fibonacci.

let num17 = 13
let a = 0, b = 1, c
while (a < num17) {
    c = a + b
    a = b
    b = c
}
console.log("Es Fibonacci ?:",a === num17)

// 17. Verifica si un número es una potencia de 2.

let num18 = 16
console.log((num18 !== 0) && ((num18 & (num18 - 1)) === 0))

// 18. Determina si un número es un palíndromo.



// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".

let texto20 = "Aprendiendo JavaScript"
console.log(texto20.includes("JavaScript"))

// 20. Determina si una cadena tiene más de 10 caracteres.

let cadena21 = "Esta es una cadena larga"
console.log("Más de 10 caracteres ?: ",cadena21.length > 10)

// 21. Verifica si una cadena de texto está en minúsculas.

let texto22 = "esta es una cadena en minúsculas"
console.log("Cadena en minusculas: ",texto22 === texto22.toLowerCase())

// 22. Determina si una cadena de texto contiene al menos un número.

let cadena23 = "Tiene al menos 1 número: 123"
console.log(/\d/.test(cadena23))

// 23. Verifica si una cadena de texto termina con un punto (.).

let texto24 = "Esta es una oración."
console.log("Termina con un punto: ",texto24.endsWith("."))

// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).

let pangrama25 = "El veloz murciélago hindú comía feliz cardillo y kiwi"
console.log((new Set(pangrama25.replace(/ /g, '').toLowerCase())).size === 26)

// 25. Verifica si un día de la semana es laborable (de lunes a viernes).

let diaSemana26 = "lunes"
console.log("Es laborable: ",diaSemana26 === "lunes" || diaSemana26 === "martes" || diaSemana26 === "miércoles" || diaSemana26 === "jueves" || diaSemana26 === "viernes")

// 26. Determina si un día es fin de semana (sábado o domingo).

let dia27 = "sábado"
console.log("Es fin de semana: ",dia27 === "sábado" || dia27 === "domingo")

// 27. Verifica si un número representa un mes válido (del 1 al 12).

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

// 28. Determina si una hora está en el rango de 9 AM a 6 PM.

let hora = 8

if (hora >= 6 && hora < 9) {
    console.log(true);
} else if (hora === 6 && minutos === 0) { // Si son exactamente las 6 PM
    console.log(true);
} else {
    console.log(false);
}


// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.

let mayorOmenor = 66
if (mayorOmenor > 65) {
    console.log("Es mayor de 65 años")
}
else if (mayorOmenor < 18){
    console.log("Es menor de 18 años")
}
else {
    console.log("La edad no concuerda")
}

// 30. Determina si un triángulo es equilátero (tres lados iguales).

let ladoA = 5
let ladoB = 5
let ladoC = 5
console.log("El triángulo es equilátero: ",ladoA === ladoB && ladoB === ladoC)

// 31. Verifica si un triángulo es isósceles (dos lados iguales).

let ladoD = 5
let ladoE = 5
let ladoF = 8
console.log("El triángulo es isósceles: ",ladoD === ladoE || ladoE === ladoF || ladoD === ladoF)

// 32. Determina si un triángulo es escaleno (todos los lados diferentes).

let ladoG = 5
let ladoH = 6
let ladoI = 7
console.log("El triángulo es escaleno: ",ladoG !== ladoH && ladoH !== ladoI && ladoG !== ladoI)

// 33. Verifica si un número es mayor que el doble de otro número.

let num1_ = 10;
let num2 = 5;
console.log(num1_ > (num2 * 2));

// 34. Determina si la suma de dos números es mayor que 100.

let num3 = 50;
let num4 = 60;
console.log("La suma de los dos números es mayor que 100: ",num3 + num4 > 100);

// 35. Verifica si la resta de dos números es menor que 50.

let num5 = 80;
let num6 = 30;
console.log(num5 - num6 < 50);

// 36. Determina si un número es el doble del otro número.

let num7 = 20;
let num8 = 10;
console.log(num7 === num8 * 2 || num8 === num7 * 2);


// 37. Verifica si el doble de un número es igual al triple de otro número.

let num9 = 10;
let num10 = 15;
console.log("Es igual al triple de otro número: ",num9 * 2 === num10 * 3 || num10 * 2 === num9 * 3);

// 38. Determina si la suma de dos números es igual a 50.

let num11 = 25;
let num12 = 25;
console.log("La suma de dos números es igual a 50: ",num11 + num12 === 50);

// 39. Verifica si el producto de dos números es mayor que 500.

let num13 = 30;
let num14 = 20;
console.log("El producto de dos números es mayor que 500: ",num13 * num14 > 500);

// 40. Determina si la división de dos números es menor que 10.

let num15 = 100;
let num16 = 20;
console.log(num15 / num16 < 10);
