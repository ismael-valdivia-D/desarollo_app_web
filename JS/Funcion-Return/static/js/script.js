function mostrarSecuencia() {
    const valor = parseInt(document.getElementById("inputNumero").value);
    if (isNaN(valor) || valor < 1) {
        document.getElementById("resultadoSecuencia").innerHTML = "<p>Ingrese un número válido mayor a 0.</p>";
        return;
    }
    let resultado = [];
    for (let i = 1; i <= valor; i++) {
        if (i % 4 === 0) {
            resultado.push(i + "*");
        } else {
            resultado.push(i);
        }
    }
    document.getElementById("resultadoSecuencia").innerHTML = `<p>${resultado.join(", ")}</p>`;
}