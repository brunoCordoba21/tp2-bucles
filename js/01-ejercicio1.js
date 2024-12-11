// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que
// ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Ingrese su edad:");

// Validar si la entrada es null, undefined o no es un número
if (edad === null || edad === undefined || isNaN(edad) || edad.trim() === "") {
  alert("Por favor, ingrese un número válido.");
} else if (edad >= 18 && edad <= 75) {
  document.write("Ya puede conducir.");
} else if (edad === 17) {
  document.write("Puede conducir con permiso de los padres.");
} else if (edad < 16) {
  document.write("No puede conducir.");
} else {
  document.write("Ingrese una edad válida entre 0 y 75.");
}
