// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un texto:");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i].toLowerCase(); // Convertimos el caracter a minúscula para no diferenciar entre mayúsculas y minúsculas
    if ("aeiouáéíóúü".includes(caracter)) { // Verificamos si el caracter es una vocal
        contadorVocales++;
    }
}

document.write(`El texto tiene  ${contadorVocales}  vocales.`);