// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

let notaAlumno = parseInt(prompt('Ingresar Nota del alumno'))
if (isNaN(notaAlumno) || notaAlumno < 0 || notaAlumno > 10) {
    alert('Introduce un número válido o que esté en el rango de 0 a 10.');
} else if (notaAlumno >= 0 && notaAlumno <= 2) {
    document.write(`La nota del alumno es ${notaAlumno} (Muy deficiente)`);
} else if (notaAlumno >= 3 && notaAlumno <= 4) {
    document.write(`La nota del alumno es ${notaAlumno} (Insuficiente)`);
} else if (notaAlumno >= 5 && notaAlumno <= 6) {
    document.write(`La nota del alumno es ${notaAlumno} (Suficiente)`);
} else if (notaAlumno === 7) {
    document.write(`La nota del alumno es ${notaAlumno} (Bien)`);
} else if (notaAlumno >= 8 && notaAlumno <= 9) {
    document.write(`La nota del alumno es ${notaAlumno} (Notable)`);
} else if (notaAlumno === 10) {
    document.write(`La nota del alumno es ${notaAlumno} (Sobresaliente)`);
}
