// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
//  Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let sumaTotal = 0;

while (true) {
    let numero = prompt("Ingrese un número (pulse 'Cancelar' para finalizar):");

    if (numero === null) {
        break;
    } else if (numero.trim() === "") {
        alert("Por favor, ingrese un número válido.");
    } else if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else {
        let numeroValido = parseFloat(numero);
        sumaTotal += numeroValido;
    }
}

document.write("La suma total de los números es: " + sumaTotal);
