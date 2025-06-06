// Creación de Arreglo
let array = ["Xbox","Nintendo"];
//Creación de funciones
function usarPush(){
// Agregar al final
    let entrada = prompt("Agregar una consola de juego: ");
    array.push(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "));
}
function usarPop(){
    //Elimina el último elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);
}
function usarUnshift(){
    // Agregar al inicio
    let entrada = prompt("Agregar una consola de juego: ");
    array.unshift(entrada);
    alert("El nuevo arreglo es: " + array.join(" "));
}
function usarShift(){
        //Elimina el primer elemento
        let basurero = array.shift();
        alert(`Elemento eliminado: ${basurero}`);
}

let compras =[]; //arreglo vacio

function listaCompras(){
    compras.push("pan",'leche','huevos')
    alert(`Lista de compras: ${compras.join( - )}`)
}

// 🧠 Ejercicio 2: Quitar el último
// A partir del arreglo anterior (compras), utiliza pop() para quitar el último producto.
//  Guarda el valor eliminado en una variable y muéstralo con alert().

function compraspop() {
    //Mostrar lista antes de eliminar
    alert(`lista de compras: ${compras}.`)
    // Guardando el elemneto eliminado en una variable
    let eliminado = compras.pop();
    // mostrando el productro eliminado ingresando la variable
    // mostrar lista actualizada
    alert(`Producto eliminado: ${eliminado}` \n`lista de compra actualizada: ${compras}`)
}

//  🧠 Ejercicio 3: Agregar al inicio
//  Crea un arreglo llamado colores = ["rojo", "azul"].
//  Usa unshift() para agregar "amarillo" al inicio.
//  Muestra el arreglo completo en consola.