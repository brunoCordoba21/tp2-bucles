// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt('Ingresar un texto').toUpperCase().trim()
if(!isNaN(texto) || texto === null || texto === ""){
    alert("Por favor ingresar una texto")
}
console.log(texto);
