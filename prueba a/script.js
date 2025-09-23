/*Ejercicio 2: Creación de función con parámetros y botón

Crea un programa en JavaScript que cumpla los siguientes requisitos:
Debe existir un input de texto en HTML donde el usuario ingrese un número.
Un botón debe ejecutar una función que reciba como parámetro el número ingresado y retorne todos los números impares desde 1 hasta el número dado.
El resultado debe mostrarse con alert y en la consola usando console.log.
Usa for, if y lógica con return para generar los valores.
Publica el proyecto en GitHub y adjunta una captura de pantalla de la ejecución.

Ejemplo esperado:
Si el usuario ingresa 10, el resultado debe ser:
1, 3, 5, 7, 9

----------------------------------------------------------------------------------------------------------------------------------*/
function  () {
    // Captura el valor del input y lo convierte a un número entero
    let input1 = document.getElementById("input1").value;
    let n = parseInt(input1);
    let resultado = [];

    // Validación para asegurarse de que el número ingresado tiene un valor o no esta simplemente vacío
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    // Bucle for para encontrar los números impares desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { // Verifica si el número es impar
            resultado.push(i); 
        }
    }

    // Muestra el resultado en un alert y en la consola
    alert(`Números impares desde 1 hasta ${n}: ${resultado.join(", ")}`);
    console.log(`Números impares desde 1 hasta ${n}: ${resultado.join(", ")}`);
}
