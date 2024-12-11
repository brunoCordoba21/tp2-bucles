// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let fila = parseInt(prompt('Ingresar número de filas:'));
let columnas = parseInt(prompt('Ingresar número de columnas:'));

if (isNaN(fila) || fila <= 0 || fila === "" || fila === null || fila === undefined) {
    alert('Por favor, ingrese un número válido para las filas');
} else if (isNaN(columnas) || columnas <= 0 || columnas === "" || columnas === null || columnas === undefined) {
    alert('Por favor, ingrese un número válido para las columnas');
} else {
    let filaColumna = fila * columnas;

    document.write('<table border="1" style="border-collapse: collapse; width: 80%; margin: 20px auto; background-color: #f9f9f9; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px;">');

    for (let indiceFila = 0; indiceFila < fila; indiceFila++) {
        document.write('<tr style="text-align: center;">');

        for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
            document.write('<td style="border: 1px solid #ccc; padding: 20px; font-size: 16px; color: #444; background-color: #fff; font-weight: bold; border-radius: 4px; transition: all 0.3s ease; text-align: center; cursor: pointer;" ' +
                'onmouseover="this.style.backgroundColor=\'#f0f0f0\';" onmouseout="this.style.backgroundColor=\'#fff\';">' + filaColumna + '</td>');
            filaColumna--;
        }

        document.write('</tr>');
    }

    document.write('</table>');
}


