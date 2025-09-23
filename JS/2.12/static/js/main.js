// Elementos del DOM
const formularioEstudiante = document.getElementById("studentForm");
const elementoError = document.querySelector(".error");
const elementoResultado = document.querySelector(".resultado");
const botonLimpiar = document.getElementById("clearBtn");
const botonTema = document.getElementById("themeToggle");

// Arreglo para almacenar todos los registros
let registrosEstudiantes = [];

// Función para normalizar el nombre: trim y capitalizar cada palabra
function capitalizarPalabras(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

// Función para ocultar mensajes
function ocultarErrores() {
  elementoError.classList.remove("mostrar");
}

function ocultarResultado() {
  elementoResultado.classList.remove("mostrar");
}

// Función para mostrar todos los estudiantes registrados
function mostrarListaEstudiantes() {
  // Contar estudiantes por jornada usando bucle
  let conteoManana = 0;
  let conteoTarde = 0;

  for (let i = 0; i < registrosEstudiantes.length; i++) {
    if (registrosEstudiantes[i].jornada === "Mañana") {
      conteoManana++;
    } else if (registrosEstudiantes[i].jornada === "Tarde") {
      conteoTarde++;
    }
  }

  // Crear lista detallada de todos los estudiantes
  let lista = "";
  registrosEstudiantes.forEach((est, index) => {
    lista += `${index + 1}. ${est.nombre}, ${est.edad} años - ${est.curso} (${est.jornada})\n`;
  });

  // Mensaje final
  const mensaje = `${lista}\nTotal registrados: ${registrosEstudiantes.length}\nJornada Mañana: ${conteoManana}\nJornada Tarde: ${conteoTarde}`;
  elementoResultado.textContent = mensaje;
  elementoResultado.classList.add("mostrar");
}

// Escuchar el envío del formulario
formularioEstudiante.addEventListener("submit", function (e) {
  e.preventDefault();

  // Resetear mensajes
  ocultarErrores();
  ocultarResultado();

  // Obtener valores
  const nombre = document.getElementById("name").value;
  const edad = Number(document.getElementById("age").value);
  const curso = document.getElementById("course").value;
  const jornada = document.querySelector('input[name="shift"]:checked')?.value;
  const aceptaReglamento = document.getElementById("acceptRules").checked;

  // Validaciones
  const errores = [];

  if (nombre.length < 2) {
    errores.push("El nombre debe tener al menos 2 caracteres.");
  }

  if (edad < 14 || edad > 100 || isNaN(edad)) {
    errores.push("La edad debe ser un número entre 14 y 100.");
  }

  if (!curso) {
    errores.push("Debe seleccionar un curso.");
  }

  if (!jornada) {
    errores.push("Debe seleccionar una jornada.");
  }

  if (!aceptaReglamento) {
    errores.push("Debe aceptar el reglamento para continuar.");
  }

  if (errores.length > 0) {
    elementoError.textContent = errores.join(" ");
    elementoError.classList.add("mostrar");
    return;
  }

  // Normalizar nombre
  const nombreNormalizado = capitalizarPalabras(nombre);

  // Guardar nuevo estudiante
  registrosEstudiantes.push({
    nombre: nombreNormalizado,
    edad: edad,
    curso: curso,
    jornada: jornada
  });

  // Mostrar lista completa
  mostrarListaEstudiantes();
});

// Botón Limpiar
botonLimpiar.addEventListener("click", function () {
  formularioEstudiante.reset();
  ocultarErrores();
  ocultarResultado();
  registrosEstudiantes = [];
});

// Botón de Tema (Modo Oscuro/Claro)
botonTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Guardar preferencia
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Actualizar texto e ícono
  botonTema.innerHTML = isDark
    ? `<i class="fas fa-sun"></i> Modo Claro`
    : `<i class="fas fa-moon"></i> Modo Oscuro`;
});

// Cargar tema al iniciar
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    botonTema.innerHTML = `<i class="fas fa-sun"></i> Modo Claro`;
  }
});