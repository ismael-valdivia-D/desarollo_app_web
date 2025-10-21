document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar elementos
  const cityLinks = document.querySelectorAll('.city-link');
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const tempUnitSelect = document.getElementById('temp-unit');
  const tempHighElements = document.querySelectorAll('.temp-high');
  const tempLowElements = document.querySelectorAll('.temp-low');

  // Temperaturas originales en Celsius
  const originalTemps = {
    high: [24, 27, 21, 26],
    low: [18, 19, 16, 21]
  };

  // Función para convertir Celsius a Fahrenheit
  function celsiusToFahrenheit(c) {
    return Math.round((c * 9/5) + 32);
  }

  // Función para actualizar temperaturas según unidad seleccionada
  function updateTemperatures() {
    const unit = tempUnitSelect.value;
    if (unit === 'C') {
      tempHighElements.forEach((el, i) => {
        el.textContent = originalTemps.high[i] + '°';
      });
      tempLowElements.forEach((el, i) => {
        el.textContent = originalTemps.low[i] + '°';
      });
    } else if (unit === 'F') {
      tempHighElements.forEach((el, i) => {
        el.textContent = celsiusToFahrenheit(originalTemps.high[i]) + '°';
      });
      tempLowElements.forEach((el, i) => {
        el.textContent = celsiusToFahrenheit(originalTemps.low[i]) + '°';
      });
    }
  }

  // Evento al cambiar la unidad de temperatura
  tempUnitSelect.addEventListener('change', updateTemperatures);

  // Evento al hacer clic en una ciudad
  cityLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Cargando informe meteorológico…');
    });
  });

  // Evento al aceptar cookies
  acceptButton.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
  });

  // Inicializar temperaturas
  updateTemperatures();
});