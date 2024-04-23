// 4. Juego de adivinanzas:



// Crea un juego de adivinanzas donde el usuario deba intentar adivinar un número secreto generado
// aleatoriamente. Proporciona pistas al usuario indicando si su suposición es mayor, menor o igual al
// número secreto. Utiliza los métodos log, warn y error para imprimir mensajes informativos al
// usuario durante el juego.


// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 70) + 1

// Mensaje de bienvenida
console.log("¡Bienvenido al juego de adivinanzas!")
console.log("Intenta adivinar un número entre 1 y 70.")

let intentos = 0
let suposicion

// Bucle de juego
while (true) {
  intentos++;
  suposicion = parseInt(prompt("Ingresa tu suposición:"))

  if (isNaN(suposicion)) {
    console.error("Por favor ingresa un número válido.")
    continue
  }

  if (suposicion === numeroSecreto) {
    console.log(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`)
    break;
  } else if (suposicion < numeroSecreto) {
    console.warn("El número secreto es mayor que tu suposición.")
  } else {
    console.warn("El número secreto es menor que tu suposición.")
  }
}
















