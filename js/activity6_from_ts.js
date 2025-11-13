document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("edad");
    var btn = document.getElementById("btn-edad");
    var salida = document.getElementById("resultado-edad");
    btn.addEventListener("click", function () {
        var valor = parseInt(input.value);
        if (isNaN(valor)) {
            salida.textContent = "Introduce un número válido";
            salida.style.color = "orange";
            return;
        }
        if (valor < 0) {
            salida.textContent = "La edad no puede ser negativa";
            salida.style.color = "orange";
            return;
        }
        if (valor >= 18) {
            salida.textContent = "Eres mayor de edad ✅";
            salida.style.color = "green";
        }
        else {
            salida.textContent = "Eres menor de edad 🚸";
            salida.style.color = "red";
        }
    });
});
