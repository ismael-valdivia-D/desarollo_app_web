function filtrarMultiples(limite, multiplo) {
    let resultado = [];
    for (let i = 1; i <= limite; i++) {
        if (i % multiplo === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}

function mostrarMultiples() {
    const limite = parseInt(document.getElementById("inputLimite").value);
    const multiplo = parseInt(document.getElementById("inputMultiplo").value);
    if (isNaN(limite) || isNaN(multiplo) || limite < 1 || multiplo < 1) {
        document.getElementById("resultadoMultiples").innerHTML = "<p>Ingrese valores válidos y mayores a 0.</p>";
        return;
    }
    const numeros = filtrarMultiples(limite, multiplo);
    document.getElementById("resultadoMultiples").innerHTML =
        `<p>Números encontrados: ${numeros.join(", ")}</p>`;
}