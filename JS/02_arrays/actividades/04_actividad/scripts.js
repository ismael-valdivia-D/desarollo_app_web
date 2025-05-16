
function multiplicaPares() {

    let num = [2, 3, 4, 5, 6, 7]; 
    let resultado = 1;
    for (let i = 0; i < num.length; i += 2) {
    resultado *= num[i];
}

alert("El resultado de multiplicar las posiciones pares es: " + resultado);
}
