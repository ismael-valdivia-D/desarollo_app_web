// Ejercicio 1: Frase a partir de un arreglo de palabras
let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];
let frase1 = `${palabras[0]} ${palabras[1]} ${palabras[2]} y ${palabras[3]} en el ${palabras[4]}.`;
alert(frase1);

// Ejercicio 2: Construir frase con número, verbo, adverbio, adjetivo y sustantivo
let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];
let frase2 = `Los ${datos[0]} ${datos[2]} ${datos[1]} ${datos[3]} ${datos[4]}.`;
alert(frase2);

// Ejercicio 3: Suma de dos elementos en una matriz de dos dimensiones
let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
let suma3 = matriz[0][1] + matriz[2][0]; // 20 + 70
alert(`La suma de ${matriz[0][1]} y ${matriz[2][0]} es: ${suma3}`);

// Ejercicio 4: Suma de dos valores en una matriz de tres niveles
let datosAnidados = [
  [1, 2, 3, 4],
  [5, 6, [7, 8, [9, 10]]]
];
let valor1 = datosAnidados[0][2]; // 3
let valor2 = datosAnidados[1][2][2][1]; // 10
let suma4 = valor1 + valor2;
alert(`La suma de ${valor1} y ${valor2} es: ${suma4}`);

// Ejercicio 5: Construir frase usando datos de arreglo + matriz
let sujeto = ["El perro", "El gato"];
let acciones = [
  ["ladra", "corre"],
  ["duerme", "salta"]
];
let frase5 = `${sujeto[1]} ${acciones[1][0]}.`; // "El gato duerme."
alert(frase5);