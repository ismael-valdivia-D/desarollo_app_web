// Ejercicio 1: contarVocales y mostrar resultado
function contarVocales(texto) {
    let acumulador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (
            texto[i] === "a" ||
            texto[i] === "e" ||
            texto[i] === "i" ||
            texto[i] === "o" ||
            texto[i] === "u"
        ) {
            acumulador++;
        }
    }
    return acumulador;
}

let resultado = contarVocales("javascript");
alert(resultado); // Esperado: 3

function mostrarVocales() {
    const texto = document.getElementById("inputVocales").value.toLowerCase();
    const cantidad = contarVocales(texto);
    document.getElementById("resultadoVocales").innerHTML =
        `<p>La palabra "${texto}" tiene ${cantidad} vocal(es).</p>`;
}

// Ejercicio 2: filtrarMultiples y mostrar en HTML
function filtrarMultiples(limite, multiplo) {
    let encontrados = [];
    for (let i = 1; i <= limite; i++) {
        if (i % multiplo === 0) {
            encontrados.push(i);
        }
    }
    return encontrados;
}

// Solicitar datos al usuario
function pedirYMostrarMultiples() {
    let limite = parseInt(prompt("Ingrese el límite superior:"));
    let multiplo = parseInt(prompt("Ingrese el múltiplo a buscar:"));
    if (isNaN(limite) || isNaN(multiplo) || limite <= 0 || multiplo <= 0) {
        alert("Por favor, ingrese valores numéricos positivos.");
        return;
    }
    let resultado = filtrarMultiples(limite, multiplo);
    document.getElementById("resultadoMultiples").innerHTML =
        `<p>Números encontrados: ${resultado.join(", ")}</p>`;
}

// Puedes agregar este div en tu HTML donde quieras mostrar el resultado:
// <button onclick="pedirYMostrarMultiples()">Filtrar múltiplos</button>
// <div id="resultadoMultiples"></div>