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

