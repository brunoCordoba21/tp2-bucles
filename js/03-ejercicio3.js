// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenasConcatenadas = ""; 

while (true) {
    let texto = prompt("Ingrese una cadena de texto:");

    if (texto === null || texto.trim() === "") {
        alert("Por favor, ingrese una cadena válida.");
        
    }else if (!confirm("¿Desea ingresar otra cadena?")) {
        cadenasConcatenadas += (cadenasConcatenadas === "") ? texto : "-" + texto;
        break;
    }

    cadenasConcatenadas += (cadenasConcatenadas === "") ? texto : "-" + texto;
}


document.write(cadenasConcatenadas);