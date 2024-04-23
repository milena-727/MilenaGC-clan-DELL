// 5. Analizador de edad:


// Crea un programa que solicite al usuario su edad y, en función de la edad ingresada, muestre un
// mensaje personalizado utilizando los métodos de impresión adecuados. Por ejemplo, si el usuario
// es menor de 18 años, muestra un mensaje indicando que es menor de edad. Si tiene entre 18 y 24
// años, muestra un mensaje de bienvenida a la juventud. Si tiene 25 años o más, muestra un
// mensaje genérico de saludo


let edad = parseInt(prompt("Por favor, ingresa tu edad:"))

if (edad < 18) {
    console.log("Eres menor de edad.")
} 
else if (edad >= 18 && edad <= 24) {
    console.log("¡Bienvenido/a a la juventud!")
} 
else if (edad >= 25) {
    console.log("¡Bienvenido/a¡ a tener responsabilidad jajajaja")
}
else {
    console.log("¡Hola! Espero que estés teniendo un buen día.")
}
















