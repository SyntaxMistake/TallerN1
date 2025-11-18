document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate").addEventListener("click", function () {
    const ageInput = document.getElementById("edad");
    const age = parseInt(ageInput.value);
    const priceElement = document.getElementById("precio");

    // Validar entrada
    if (isNaN(age) || age < 1 || age > 120) {
      alert("Por favor, ingresa una edad válida entre 1 y 120 años.");
      ageInput.focus();
      return;
    }

    let price = 0;

    // Determinar precio según la edad
    if (age >= 1 && age <= 3) {
      price = 0;
    } else if (age >= 4 && age <= 8) {
      price = 2;
    } else if (age >= 9 && age <= 16) {
      price = 5;
    } else if (age >= 17 && age <= 35) {
      price = 7;
    } else {
      price = 10;
    }

    // Mostrar resultado
    priceElement.textContent = price === 0 ? "GRATIS" : `$${price}`;
  });

  // Permitir calcular presionando Enter
  document.getElementById("edad").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("calculate").click();
    }
  });
});
