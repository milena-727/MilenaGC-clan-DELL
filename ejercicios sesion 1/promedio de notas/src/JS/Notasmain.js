// 3. Calcular el promedio de notas:


// Crea un programa que permita al usuario ingresar las notas de un estudiante en cinco asignaturas.
// Almacena las notas en un arreglo. Calcula el promedio de las notas y determina si el estudiante
// aprobó o reprobó el curso (aprobando con un promedio mayor o igual a 3.0). Imprime en la
// consola el promedio, la clasificación final (aprobado o reprobado) y todas las notas utilizando los
// métodos de impresión adecuados.


let notas = []

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota de la asignatura ${i + 1}:`))
    notas.push(nota)
}

let totalNotas = 0
for (let i = 0; i < notas.length; i++) {
    totalNotas += notas[i]
}

let promedio = totalNotas / notas.length

let clasificacion
if (promedio >= 3.0) {
    clasificacion = "Aprobado"
} else {
    clasificacion = "Reprobado"
}

console.log("Notas del estudiante:")
for (let i = 0; i < notas.length; i++) {
    console.log(`Asignatura ${i + 1}: ${notas[i]}`)
}

console.log("\n--- Resultados ---")
console.log(`Promedio: ${promedio}`)
console.log(`Clasificación: ${clasificacion}`)












