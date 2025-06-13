/*✅ Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra "Acceso permitido".
Si no, muestra "Acceso denegado". */
function mayoriaEdad() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (isNaN(edad) || edad < 0) { 
        document.getElementById("resultado1").innerHTML =
            `<p>El valor <strong>${edad}</strong> es inválido. Por favor, ingrese un número positivo.</p>`;
    } else if (edad >= 18) {
        document.getElementById("resultado1").innerHTML =
            `<p>Acceso permitido. Su edad es: ${edad}</p>`;
    } else { 
        document.getElementById("resultado1").innerHTML =
            `<p>Acceso denegado. Su edad es: ${edad}</p>`;
    }
}

/* ✅ Ejercicio 2: Añadir producto si no está
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */
function mostrarNuevoProducto() {
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto:");

    if (nuevoProducto === null || nuevoProducto.trim() === '') { 
        document.getElementById("resultado2").innerHTML =
            `<p>Operación cancelada o nombre de producto vacío.</p>`;
        return; 
    }

    let productoNormalizado = nuevoProducto.trim().toLowerCase(); 

    if (productos.includes(productoNormalizado)) {
        document.getElementById("resultado2").innerHTML =
            `<p>El producto: <strong>${nuevoProducto}</strong> ya está en la lista.</p>`;
    } else {
        productos.push(nuevoProducto); 
        document.getElementById("resultado2").innerHTML =
            `<p>Producto <strong>${nuevoProducto}</strong> añadido. Lista actualizada: <strong>${productos.join(" - ")}</strong></p>`;
    }
}

/*
✅ Ejercicio 3: Control de tareas
Declara el arreglo tareas con 6 tareas predefinidas.
Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
Si tiene 5 o menos, muestra "Lista aceptable".
*/
let tareas = ['hacer la compra', 'limpiar la casa', 'estudiar para el examen', 'ir al gym', 'cocinar', 'leer un libro'];

function controlTareas() {
    if (tareas.length > 5) {
        let tareaEliminada = tareas.pop();
        document.getElementById("resultado3").innerHTML =
            `<p>Se eliminó la tarea "${tareaEliminada}". Lista de tareas actualizada: ${tareas.join(", ")}</p>`;
    } else { 
        document.getElementById("resultado3").innerHTML =
            `<p>Lista aceptable. Tareas actuales: ${tareas.join(", ")}</p>`;
    }
}

/*
✅ Ejercicio 4: Validar primer elemento
let cola = ["sinNombre", "Pedro", "Lucía"];

Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
Si no, muestra "Cola correcta".
*/
let cola = ["sinNombre", "Pedro", "Lucía"];

function validarCola() {
    if (cola.length === 0) { 
        document.getElementById("resultado4").innerHTML =
            `<p>La cola está vacía.</p>`;
        return;
    }

    if (cola[0] === "sinNombre") {
        let elementoEliminado = cola.shift(); 
        document.getElementById("resultado4").innerHTML =
            `<p>"${elementoEliminado}" fue eliminado. Nueva cola: ${cola.join(", ")}</p>`;
    } else {
        document.getElementById("resultado4").innerHTML =
            `<p>Cola correcta. El primer elemento no es "sinNombre". Cola: ${cola.join(", ")}</p>`;
    }
}

/*
✅ Ejercicio 5: Saludo condicional
Declara la variable nombre.
Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
Si está vacío, muestra "Nombre no válido"
*/

let nombre = '';
function saludoCondicional() {
    let inputNombre = prompt("Ingrese su nombre:");


    if (inputNombre === null || inputNombre.trim() === '') {
        document.getElementById("resultado5").innerHTML =
            `<p>Nombre no válido. Por favor, ingrese un nombre.</p>`;
    } else {
        nombre = inputNombre.trim(); 
        let saludos = []; 
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("resultado5").innerHTML =
            `<p>${saludos.join(", ")}</p>`;
    }
}

/*
✅ Ejercicio 6: Calificar nota
Declara la variable nota con un valor entre 1 y 7.
Si nota >= 6: muestra "Excelente".
Si nota >= 4: muestra "Aprobado".
Si nota < 4: muestra "Reprobado".
*/

function calificarNota() {
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7:"));

if (nota > 7 || nota < 0){
    document.getElementById("resultado6").innerHTML =
        `<p>Nota inválida. Por favor, ingrese un número entre 1 y 7.</p>`;
}
else if (nota >=6){
    document.getElementById("resultado6").innerHTML =
        `<p>Excelente. Su nota es: ${nota}</p>`;
}
else if (nota >= 4) {
    document.getElementById("resultado6").innerHTML =
        `<p>Aprobado. Su nota es: ${nota}</p>`;
} else {
    document.getElementById("resultado6").innerHTML =
        `<p>Reprobado. Su nota es: ${nota}</p>`;
}
}

/*
✅ Ejercicio 7: Registro de visitantes
Crea un arreglo vacío visitas y una variable persona.
Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
Si está vacío, muestra "Error: nombre vacío".
*/

let visitas = [];
function registrarVisita() {
    let persona = prompt("Ingrese su nombre:");
    if (persona === null || persona.trim() === '') {
        document.getElementById("resultado7").innerHTML =
            `<p>Error: nombre vacío. Por favor, ingrese un nombre válido.</p>`;
    } else {
        visitas.unshift(persona.trim()); 
        document.getElementById("resultado7").innerHTML =
            `<p>Registro exitoso. Visitas actuales: ${visitas.join(", ")}</p>`;
    }
}

/*
✅ Ejercicio 8: Control de stock
js
let stock = ["arroz", "fideos"];

Declara la variable productoSolicitado.
Si stock incluye el producto, muestra "Producto disponible".
Si no, agrégalo con push() y muestra "Producto agregado al stock".
*/

let stock = ["arroz", "fideos"];
let productoSolicitado = '';
function controlarStock() {
    productoSolicitado = prompt("Ingrese el producto solicitado:");
    if (productoSolicitado === null || productoSolicitado.trim() === '') {
        document.getElementById("resultado8").innerHTML =
            `<p>Error: nombre de producto vacío. Por favor, ingrese un nombre válido.</p>`;
        return; 
    }
    if (stock.includes(productoSolicitado.trim())) {
        document.getElementById("resultado8").innerHTML =
            `<p>Producto disponible: ${productoSolicitado}</p>`;
    }
    else {
        stock.push(productoSolicitado.trim()); 
        document.getElementById("resultado8").innerHTML =
            `<p>Producto agregado al stock: ${productoSolicitado}. Stock actual: ${stock.join(", ")}</p>`;
    }
    
}
/*
✅ Ejercicio 9: Lista de invitados
js
let invitados = ["Ana", "Luis", "Camila"];

Declara la variable persona.
Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
Si no, muestra "No estás en la lista".
*/
let invitados = ["Ana", "Luis", "Camila"];
function verificarInvitado() {
    let persona = prompt("Ingrese su nombre:");
    if (invitados.includes(persona)){
        document.getElementById("resultado9").innerHTML =
            `<p>Bienvenido, ${persona}.</p>`;
    }
    else {
        document.getElementById("resultado9").innerHTML =
            `<p>No estás en la lista, ${persona}.</p>`;
    }
}

/*
✅ Ejercicio 10: Evaluar rol de usuario
js
let usuarios = ["Admin", "Editor", "Invitado"];
Declara la variable rol.
Si rol === "Admin", agrégalo al inicio con unshift() y muestra "Rol prioritario agregado".
Si es otro rol, usa push() y muestra "Rol agregado".
*/
let usuarios = ["Admin", "Editor", "Invitado"];
function evaluarRol() {
    let rol = prompt("Ingrese su rol: ");
    if (rol === null || rol.trim() === '') {
        document.getElementById("resultado10").innerHTML =
            `<p>Error: rol vacío. Por favor, ingrese un rol válido.</p>`;
        return; 
    }
    else if (rol.trim() === "Admin") {
        usuarios.unshift(rol.trim()); 
        document.getElementById("resultado10").innerHTML =
            `<p>Rol prioritario agregado: ${rol}. Usuarios actuales: ${usuarios.join(", ")}</p>`;
    }
    else{
        usuarios.push(rol.trim()); 
        document.getElementById("resultado10").innerHTML =
            `<p>Rol agregado: ${rol}. Usuarios actuales: ${usuarios.join(", ")}</p>`;
    }
}