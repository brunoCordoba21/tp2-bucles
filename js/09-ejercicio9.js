// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

let numero = 1

while (numero <= 500) {

    if (numero % 4 === 0) {
        document.write(`${numero}  (múltiplo de 4) <br>`)

    } else if (numero % 9 === 0) {
        document.write(`${numero} (Múltiplo de 9 <br>`)


    }else {
        document.write(`${numero} <br>`)
    }
    if (numero % 5 === 0) {
        document.write('--------------------------<br>')
    }
    numero++

}

