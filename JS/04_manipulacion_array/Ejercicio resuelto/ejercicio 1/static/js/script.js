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
    alert(`Lista de compras: ${compras.join(" - ")}`)
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
    alert(`Producto eliminado: ${eliminado}``\n lista de compra actualizada: ${compras}`)
}

//  🧠 Ejercicio 3: Agregar al inicio
//  Crea un arreglo llamado colores = ["rojo", "azul"].
//  Usa unshift() para agregar "amarillo" al inicio.
//  Muestra el arreglo completo en consola.

let colores=['rojo', 'azul'];
function agregarColor(){
    let entrada= prompt('Agregar un color: ')
    colores.unshift(entrada);
    alert(`El color agregado es ${colores}`);
}

// 🧠 Ejercicio 4: Quitar el primero
// Usa el arreglo colores y elimina el primer elemento con shift().
// Guarda el valor eliminado y muéstralo con alert().

function eliminarPrimerColor(){
    let colorEliminado = colores.shift();
    alert('El color eliminado - '+ colorEliminado + '\n Colores actualizados: ' + colores);
}

/* 🧠 Ejercicio 5: Combinación de métodos
Crea un arreglo llamado numeros = [10, 20, 30].
Quita el primer número.
Agrega 40 al final.
Agrega 5 al inicio.
Elimina el último número.
Muestra el arreglo final usando console.log().
*/
let numeros = [10 ,20, 30]
function agregarNumeros( ){
    numeros.push(40)
    alert(`Le agregamos 40 al final`)
    numeros.shift()
    alert('le quitamos el primer numero')
    numeros.unshift(5)
    alert('Le agregamos un 5 al inicio')
    numeros.pop()
    alert('Eliminamos el ultimo numero')
    alert(`El arreglo quedo asi ${numeros}`)
}
/*
🧠 Ejercicio 6: Agregar elementos en orden inverso
Crea un arreglo vacío llamado orden.
Agrega los números 1, 2, 3 al inicio del arreglo (no al final).
Muestra el resultado final con console.log().
 */

let orden = []
function ordenar() {
    orden.unshift(3)
    orden.unshift(2)
    orden.unshift(1)
    console.log(orden)
}

/*
🧠 Ejercicio 7: Historial de mensajes
Crea un arreglo llamado historial = [].
Agrega al final 3 mensajes usando push(). Luego elimina el último mensaje enviado con pop() y muestra el mensaje eliminado.
*/

let historial = []
function historialPro() {
    let mensaje = prompt("Agregar un mensaje: ")
    historial.push(mensaje)
    let mensaje2 = prompt("Agregar un mensaje: ")
    historial.push(mensaje2)
    let mensaje3= prompt("Agregar un mensaje: ")
    historial.push(mensaje3)
    alert("El nuevo arreglo es: " + historial.join(" - "))
    let basura = historial.pop()
    alert(`Elemento eliminado: ${basura}`)
}

/*
🧠 Ejercicio 8: Cola de atención
Crea un arreglo cola = ["Cliente1", "Cliente2", "Cliente3"].
Elimina al primer cliente usando shift().
Agrega "Cliente4" al final de la cola.
Muestra la cola final.
*/

let cola = ["Cliente1", "Cliente2", "Cliente3"]
function colaAtencion() {
    alert(cola)
    let basura = cola.shift()
    alert(`Le quitamos ${basura}`)
    cola.push("Cliente4")
    alert("Le agregamos Cliente4")
    alert("La cola quedo asi "+cola)
}
/*
🧠 Ejercicio 9: Reordenar nombres
Dado el arreglo nombres = ["Pedro", "Juan", "Luis"]:
Quita el último nombre.


Agrega "Mateo" al inicio.


Agrega "Ana" al final.
Muestra el arreglo actualizado.
*/

function nombresA() {
    let nombres = ["Pedro", "Juan", "Luis"]
    alert(nombres)
    let basura = nombres.pop()
    alert(`Quitamos el nombre ${basura}`)
    nombres.unshift("Mateo")
    alert("Agregamos a Mateo al inicio")
    nombres.push("Ana")
    alert("Agregamos a Ana al final")
    alert(nombres)
}

/*
🧠 Ejercicio 10: Pilas y colas
Crea un arreglo vacío llamado pila.


Simula una pila agregando 3 elementos con push().


Luego quita 2 elementos con pop() y muéstralos.


Crea otro arreglo vacío llamado colaNueva.


Simula una cola agregando 3 elementos con push().


Luego atiende (quita) 2 elementos con shift() y muéstralos.
*/

function pilasColas() {
    let pila = []
    pila.push("Ayer","Hoy","Mañana")
    alert(pila)
    pila.pop()
    pila.pop()
    let colaNueva = []
    colaNueva.push("Martes","Miercoles","Jueves")
    colaNueva.shift()
    colaNueva.shift()
    alert(`La pila quedo asi: ${pila}`)
    alert(`La cola quedo asi: ${colaNueva}`)
}

/*
🧩 Ejercicio 11: Completar la semana laboral
Arreglo inicial:
javascript

let dias = ["lunes", "miércoles", "jueves"];

Arreglo final esperado:
javascript
["lunes", "martes", "miércoles", "jueves", "viernes"]

Instrucciones:
Tienes un arreglo incompleto de los días de la semana laboral. Agrega los días que faltan en el orden correcto para obtener la secuencia completa de lunes a viernes. Utiliza métodos de arreglo para lograrlo. Al finalizar, muestra el arreglo actualizado.
*/

let dias = ["lunes", "miércoles", "jueves"]
function semana() {
    dias.push("viernes")
    dias.shift()
    dias.unshift("Martes")
    dias.unshift("Lunes")
    alert(dias)
}

/*
🧩 Ejercicio 12: Registro de personas en una sala
Arreglo inicial:
javascript
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];

Arreglo final esperado:
javascript
["Pedro", "María", "Luis", "Camila"]

Instrucciones:
Se necesita modificar el registro de personas que están dentro de una sala:
Algunas personas deben salir (del inicio y del final).


Nuevas personas deben ingresar en las posiciones adecuadas.
Realiza los cambios necesarios para que el arreglo final coincida con el esperado. Al final, muestra el nuevo listado de personas.
*/
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"]
//              ["Pedro", "María", "Luis", "Camila"]
function personasOrden() {
    alert(personas)
    personas.shift()
    personas.unshift("Pedro")
    personas.pop()
    personas.pop()
    personas.push("Camila")
    alert(`El nuevo listado es: ${personas}`)
}

/*
🧩 Ejercicio 13: Lista de tareas actualizada
Arreglo inicial:
javascript
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];

Arreglo final esperado:
javascript

["comer", "estudiar", "lavar la ropa", "organizar escritorio"]

Instrucciones:
La lista de tareas ha cambiado. Se deben eliminar algunas tareas del final y reemplazarlas por otras nuevas que llegaron esta semana. Realiza las modificaciones necesarias para que la lista final coincida con el estado esperado. Muestra el resultado por consola o en un alert().
*/

let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"]
//           ["comer", "estudiar", "lavar la ropa", "organizar escritorio"]
function ordenTarea() {
    alert(`El orden actual es: ${tareas}`)
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.pop()
    tareas.push("lavar la ropa")
    tareas.push("organizar escritorio")
    alert(`El nuevo orden es: ${tareas}`)
}