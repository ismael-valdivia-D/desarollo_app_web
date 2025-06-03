// creacion de arreglo
let array = ["Xbox","Nintendo"];

//creacion de funciones
function usarPush(){
//Agrega al final
let entrada = prompt("Agregar a la consola de juegos: ")
array.push("PlayStation 1", "PlayStation 2");
alert("El nuevo arreglo es: " + entrada.join(" - "));
}

function usarPop(){
    //Elimina el ultimo elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);
}

function usarUnshift(){
    //agregar al inicio
    let entrada = prompt("Agregar a la consola de juegos: ")
array.unshift("PlayStation 1", "PlayStation 2");
alert("El nuevo arreglo es: " + entrada.join(" - "));
}


function usarShift(){
    //Elimina el primer elemento
    let basurero = array.shift();
    alert(`Elemento eliminado: ${basurero}`);
}