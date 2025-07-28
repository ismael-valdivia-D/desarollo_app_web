/*
🟦 Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un número usando prompt. Luego,
crea una función que reciba ambos valores como parámetros, repita
la palabra N veces utilizando un bucle, y retorne el resultado
completo como una cadena de texto. Muestra el resultado con alert.
*/

function repetirPalabra(palabra, veces) {
    let resultado = '';
    for (let i = 0; i < veces; i++) {
        resultado += `${palabra} `;
    }
    return resultado.trim();
}

function mostarPalabra() {
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt('Ingrese cantidad a repetir'));

    let resultadoFinal = repetirPalabra(palabra, numero);

    document.getElementById("resultado").textContent = resultadoFinal;
};

/*
🟦 Ejercicio 2: Comparar dos números
📌 Usa input para pedir dos números. Crea una función con dos parámetros
que compare los valores y retorne un mensaje indicando cuál número es
mayor, menor o si son iguales. Muestra el mensaje en html.
*/

function compararNumeros(input1, input2) {
    // Verificamos si los campos están vacíos
    if (input1 === "" || input2 === "") {
        return "Por favor, ingresa ambos numeros.";
    }

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual que ${num2}`;
    };
};

function mostrarComparacion() {
    let input1 = document.getElementById("input20").value;
    let input2 = document.getElementById("input21").value;

    let resultado = compararNumeros(input1, input2);

    document.getElementById("mostrarComparacion").textContent = resultado;
};

/*
🟦 Ejercicio 3: Verificar si un número es par o impar
📌 Solicita un número usando input. Diseña una función
que reciba ese número como parámetro, determine si es
par o impar, y retorne un mensaje con el resultado. 
Muestra ese mensaje al usuario en html.
*/

function parImpar(num) {
    if (num % 2 === 0) {
        return `${num} es par`
    } else {
        return `${num} es impar`
    }
};

function mostrarParImpar() {
    let input1 = document.getElementById("input30").value;

    let num = parseInt(input1)

    let resultado = parImpar(num)

    document.getElementById("mostrarParImpar").textContent = resultado;
};

/*
🟦 Ejercicio 4: Validar si un número es primo
📌 Captura un número usando input. Luego, crea una función que reciba 
ese número como parámetro y retorne un mensaje indicando si el número 
es primo o no. Muestra el resultado con html.
*/

function esPrimo(num) {
    if (num <= 1) {
        return `${num} no es primo`;
    };
    // Math.sqrt() es una función que se utiliza para calcular
    // la raíz cuadrada de un número.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        
        // 3. Si encontramos un divisor exacto resto 0, no es primo.
        if (num % i === 0) {
        return `${num} no es primo`;
        }
    }

    return `${num} es primo`;
};

function mostrarPrimo() {
    let input1 = document.getElementById("input40").value;

    let num = parseInt(input1)

    let resultado = esPrimo(num)

    document.getElementById("mostrarPrimo").textContent = resultado;
};

/*
🟦 Ejercicio 5: Calcular potencia con bucle
📌 Pide al usuario una base y un exponente mediante input. 
Usa una función que reciba ambos valores como parámetros, 
calcule la potencia utilizando un bucle, y retorne el resultado. 
Finalmente, muestra el valor calculado en html.
*/

function calculo(input1, input2) {
    let base = parseInt(input1);
    let exponente = parseInt(input2);

    let resultado = base ** exponente;

    return `El resultado es: ${resultado}`
};

function mostrarCalculo() {
    let input1 = document.getElementById("input50").value;
    let input2 = document.getElementById("input51").value;

    let resultado = calculo(input1, input2);

    document.getElementById("mostrarCalculo").textContent = resultado;
};