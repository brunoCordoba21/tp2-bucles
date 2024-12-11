// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
// 
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
 let numeroDePiramides = (parseInt(prompt('Ingresar números no mayor a 50')))
if(numeroDePiramides <= 0 || numeroDePiramides > 50 || isNaN(numeroDePiramides) || numeroDePiramides === null || numeroDePiramides === parseFloat){
    alert(`Lo que ingresaste ${numeroDePiramides}, no es valido ingresa un numero del 1 al 50`)
}else{
    for(let fila = 1 ; fila <= numeroDePiramides; fila ++ ){
        let numerosPiramidesFinal = '' 
        for(let numeros = 1 ; numeros <= fila; numeros ++){ 
        numerosPiramidesFinal += numeros
        }
        console.log(numerosPiramidesFinal);
        
        }
}



