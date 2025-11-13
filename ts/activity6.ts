/**
 *  Determina si el usuario es mayor o menor de edad.
 * Gestiona errores y muestra mensajes con colores.
 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("edad") as HTMLInputElement;
  const btn = document.getElementById("btn-edad") as HTMLButtonElement;
  const salida = document.getElementById("resultado-edad") as HTMLElement;

  btn.addEventListener("click", () => {
    const valor = parseInt(input.value);

    if (isNaN(valor)) {
      salida.textContent = "Introduce un número válido";
      salida.style.color = "red";
      return;
    }

    if (valor < 0) {
      salida.textContent = "La edad no puede ser negativa";
      salida.style.color = "red";
      return;
    }

    if (valor >= 18) {
      salida.textContent = "Eres mayor de edad ✅";
      salida.style.color = "green";
    } else {
      salida.textContent = "Eres menor de edad 🚸";
      salida.style.color = "orange";
    }
  });
});

