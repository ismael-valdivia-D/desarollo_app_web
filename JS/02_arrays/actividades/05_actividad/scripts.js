
function mensajeConcatenado() {
    let numeros = [7, 5, 3, 4, 8];
    let suma = numeros[2] + numeros[4];
    let palabras = ["completo", "estas", "gusta", "hola", "como"];    
    let mensaje = (palabras[3] + " " + palabras[4]) +" " + palabras[1];
    alert("El mensaje es: "  + mensaje + " y el resultado de la suma de valores de la segunda y cuarta posicion es de: " + suma);
}