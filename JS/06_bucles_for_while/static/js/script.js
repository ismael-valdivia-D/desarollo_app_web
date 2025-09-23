function contarHastaN(){
    let numeros = parseInt(prompt("Ingrese un número entero positivo:"));
    if (isNaN(numeros) || numeros <= 0) {
        document.getElementById("resultado").innerHTML =
            `<p>Error: Debe ingresar un número entero positivo.</p>`;
    } else {
        let resultado = [];
        for (let i = 1; i <= numeros; i++) {
            resultado.push(i);
        }
        document.getElementById("resultado").innerHTML =
            `<p>Números del 1 al ${numeros}: ${resultado.join(", ")}</p>`;
    }

}

/*
✅ Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.
*/

function sumaCincoNumeros() {
    let numeros = [];
    let suma = 0;
    let contador = 0;   
    
    while (contador < 5) {
        let numero = parseFloat(prompt(`Ingrese el número ${contador + 1}:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
            suma += numero;
            contador++;
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }
    document.getElementById("resultado2").innerHTML =
        `<p>La suma de los números ${numeros.join(", ")} es: ${suma}</p>`;
}

/*
✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los números pares del 1 al 20.
*/  

function mostrarPares() {
    let pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    document.getElementById("resultado3").innerHTML =
        `<p>Números pares del 1 al 20: ${pares.join(", ")}</p>`;
}

/*
✅ Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
*/

function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un número entero positivo para el contador regresivo:"));
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado4").innerHTML =
            `<p>Número no válido.</p>`;
        return;
    }
    let resultado = "";
    while (numero >= 0) {
        resultado += numero + " ";
        numero--;
    }
    document.getElementById("resultado4").innerHTML =
        `<p>Contador regresivo: ${resultado.trim()}</p>`;
}

/*
✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.
*/

function tablaMultiplicar() {
    let resultado = "";
    let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
    for (let i = 1; i <= 10; i++) {
        let mult = numero * i;
        resultado += `${numero} x ${i} = ${mult}<br>`;
    }
    document.getElementById("resultado5").innerHTML =
        `<p>Tabla de multiplicar del ${numero}:</p><p>${resultado}</p>`;
    }

/*
✅ Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.
*/
function sumarHastaCero() {
    let suma = 0;
    let numero;
    sumaAcumulada = [];
    do {
        numero = parseFloat(prompt("Ingrese un número para sumar (0 para terminar):"));
        if (!isNaN(numero)) {
            suma += numero;
            sumaAcumulada.push(numero);
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } while (numero !== 0); 
    document.getElementById("resultado6").innerHTML =
        `<p>Total acumulado: ${suma}</p><p>Números ingresados: ${sumaAcumulada.join(", ")}</p>`;

  }
/*
✅ Ejercicio 7: Mostrar letras de una palabra
Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.
*/
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra:");
    let letras = [];
    for (let i = 0; i < palabra.length; i++) {
        letras.push(palabra[i]);
    }
    document.getElementById("resultado7").innerHTML =
        `<p>Letras de la palabra "${palabra}": ${letras.join(", ")}</p>`;
}

/*
✅ Ejercicio 8: Validar contraseña
Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba "admin123". Luego, muestra "Acceso concedido".
*/
function validarContrasena() {
    let contrasena;
    do {
        contrasena = prompt("Ingrese la contraseña:");
        if (contrasena === "admin123") {
            document.getElementById("resultado8").innerHTML =
                `<p>Acceso concedido.</p>`;
        } else {
            alert("Contraseña incorrecta. Inténtelo de nuevo.");
        }
    } while (contrasena !== "admin123");
}

/*
✅ Ejercicio 9: Promedio de notas
Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota, calcula el promedio y lo muestra.
*/
function promedioNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas va a ingresar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado9").innerHTML =
            `<p>Error: Debe ingresar un número entero positivo.</p>`;
        return;
    }
    
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
        if (!isNaN(nota)) {
            suma += nota;
        } else {
            alert("Por favor, ingrese una nota válida.");
            i--; // Repetir la iteración si la nota no es válida
        }
    }
    
    let promedio = suma / cantidad;
    document.getElementById("resultado9").innerHTML =
        `<p>El promedio de las notas es: ${promedio.toFixed(2)}</p>`;
}

/*
✅ Ejercicio 10: Contar cuántos son mayores de edad
Pide con prompt() cuántas personas vas a ingresar. Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).
*/
function contarMayoresEdad() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado10").innerHTML =
            `<p>Error: Debe ingresar un número entero positivo.</p>`;
        return;
    }
    
    let mayoresEdad = 0;
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}:`));
        if (!isNaN(edad)) {
            if (edad >= 18) {
                mayoresEdad++;
            }
        } else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Repetir la iteración si la edad no es válida
        }
    }
    
    document.getElementById("resultado10").innerHTML =
        `<p>El número de personas mayores de edad es: ${mayoresEdad}</p>`;
}
