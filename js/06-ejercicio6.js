// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666

let numero = 1
let fila = 1

while(numero <= 30){
       let filaActualizadas = ''
for(let i = 1 ; i <= fila ; i ++){
  filaActualizadas += fila
}
console.log(filaActualizadas)
numero ++
fila ++

}
