// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
//  Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


let cadenaTexto = prompt('Ingresar una cadena de texto').trim()

if(cadenaTexto === null || cadenaTexto === "" || !isNaN(cadenaTexto) ){
alert('Por favor, ingresar una cadena valida')
}else{
    let cadadenaUnida = cadenaTexto.split("").join("-")
    console.log(cadadenaUnida);
    
}
