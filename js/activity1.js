function calcularCalificacion() {
  const input = document.getElementById("nota");
  const salida = document.getElementById("resultado1");
  const nota = parseFloat(input.value);

  if (isNaN(nota)) {
    salida.textContent = "Por favor, introduce un número válido.";
    salida.style.color = "red";
    return;
  }

  if (nota < 0 || nota > 10) {
    salida.textContent = "La nota debe estar entre 0 y 10.";
    salida.style.color = "red";
    return;
  }

  let calificacion;
  if (nota < 5) calificacion = "Suspenso";
  else if (nota < 6) calificacion = "Aprobado";
  else if (nota < 7) calificacion = "Bien";
  else if (nota < 9) calificacion = "Notable";
  else calificacion = "Sobresaliente";

  salida.textContent = `Tu calificación es: ${calificacion}`;
  salida.style.color = "green";
}

