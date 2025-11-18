document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM según el HTML proporcionado
  const codigoInput = document.getElementById("codigo");
  const calculateButton = document.getElementById("calculate");
  const categoriaElement = document.getElementById("categoria");

  // Función para determinar la categoría
  function determinarCategoria(codigo) {
    // Validar que el código tenga 3 dígitos
    if (codigo.length !== 3 || !/^\d+$/.test(codigo)) {
      return {
        categoria: "Código inválido",
        clase: "error",
      };
    }

    // Contar dígitos pares
    let contadorPares = 0;
    for (let i = 0; i < codigo.length; i++) {
      const digito = parseInt(codigo[i]);
      if (digito % 2 === 0) {
        contadorPares++;
      }
    }

    // Determinar categoría según el número de dígitos pares
    if (contadorPares === 3) {
      return {
        categoria: "Director General",
        clase: "director-general",
      };
    } else if (contadorPares === 2) {
      return {
        categoria: "Directivo",
        clase: "directivo",
      };
    } else if (contadorPares === 1) {
      return {
        categoria: "Staff",
        clase: "staff",
      };
    } else {
      return {
        categoria: "Seguridad",
        clase: "seguridad",
      };
    }
  }

  // Función para mostrar resultado
  function mostrarResultado() {
    const codigo = codigoInput.value.trim();

    // Validar que no esté vacío
    if (codigo === "") {
      categoriaElement.textContent = "Ingrese un código";
      categoriaElement.className = "categoria";
      return;
    }

    // Determinar categoría
    const resultado = determinarCategoria(codigo);

    // Mostrar resultado
    categoriaElement.textContent = resultado.categoria;
    categoriaElement.className = "categoria " + resultado.clase;
  }

  // Event listeners
  calculateButton.addEventListener("click", mostrarResultado);

  codigoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      mostrarResultado();
    }
  });

  // Validación de entrada - solo números y máximo 3 dígitos
  codigoInput.addEventListener("input", function () {
    // Remover cualquier carácter que no sea número
    this.value = this.value.replace(/[^0-9]/g, "");

    // Limitar a 3 dígitos
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });

  // Prevenir el comportamiento por defecto de las teclas - y +
  codigoInput.addEventListener("keydown", function (e) {
    if (e.key === "-" || e.key === "+" || e.key === "e" || e.key === "E") {
      e.preventDefault();
    }
  });

  // Inicializar el estado
  categoriaElement.textContent = "---";
});
