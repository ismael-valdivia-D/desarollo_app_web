/*Ejercicio 2 (Función con Parámetros y Return)
Instrucción:
 Crea una función llamada filtrarMultiples que:
Reciba dos parámetros: un número limite y otro número multiplo.


Retorne un arreglo con todos los números desde 1 hasta limite que sean divisibles por multiplo.


Muestra el resultado con html (formateado como cadena).


Usa input para pedir limite y multiplo.


Objetivo de aprendizaje:
Diseñar una función que use parámetros y retorne un valor.


Practicar bucles for y condicionales if para filtrar datos.


Aplicar lógica de divisibilidad y construir arreglos dinámicos.


Ejemplo esperado:
Si el usuario ingresa limite = 10 y  multiplo = 3, el resultado será:
Números encontrados: 3, 6, 9
*/

function filtrarMultiples(limite, multiplo) {
    let numeros = [];
    for (let i = 1; i <= limite; i++) {
        if (i % multiplo === 0) {
            numeros.push(i);
        }
    }



}