/*✅ Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra
"Acceso permitido".
 Si no, muestra "Acceso denegado". */

function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado").innerHTML =
        `<p>Es mayor de Edad: ${edad} </p>`;
    }else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML =
        `<p>Es menor de Edad: ${edad} </p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}


/* ✅ Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */
function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}

}