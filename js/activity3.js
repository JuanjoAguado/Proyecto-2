/**
 * 🎯 ACTIVIDAD 3: Funciones JavaScript con Documentación JSDoc
 * @file Contiene funciones matemáticas y de validación
 * @version 1.0.0
 */

/**
 * 🔢 Calcula el factorial de un número positivo
 * @param {number} n - Número entero positivo para calcular su factorial
 * @returns {number} El factorial del número (n!)
 * @throws {Error} Si el número es negativo o no es entero
 * @example
 * // returns 120
 * factorial(5);
 * @example
 * // returns 1
 * factorial(0);
 */
function factorial(n) {
    if (n < 0) {
        throw new Error("El factorial no está definido para números negativos");
    }
    if (!Number.isInteger(n)) {
        throw new Error("El factorial solo está definido para números enteros");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

/**
 * 📊 Calcula la media aritmética de una lista de números
 * @param {string} numerosStr - Cadena con números separados por comas
 * @returns {number} La media aritmética de los números
 * @throws {Error} Si la cadena está vacía o contiene valores no numéricos
 * @example
 * // returns 3
 * mediaAritmetica("1,2,3,4,5");
 */
function mediaAritmetica(numerosStr) {
    if (!numerosStr.trim()) {
        throw new Error("La cadena de números no puede estar vacía");
    }
    
    const numerosArray = numerosStr.split(',');
    const numeros = numerosArray.map(num => parseFloat(num.trim()));
    
    if (numeros.some(isNaN)) {
        throw new Error("Todos los elementos deben ser números válidos");
    }
    
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / numeros.length;
}

/**
 * 🔄 Determina si una cadena de texto es un palíndromo
 * @param {string} texto - Texto a verificar
 * @returns {boolean} true si es palíndromo, false en caso contrario
 * @example
 * // returns true
 * esPalindromo("Anita lava la tina");
 * @example
 * // returns false
 * esPalindromo("Hola mundo");
 */
function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoReverso = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoReverso;
}

/**
 * 🆔 Valida un DNI español según el formato oficial
 * @param {string} dni - DNI a validar (formato: 8 dígitos + 1 letra)
 * @returns {boolean} true si el DNI es válido, false en caso contrario
 * @throws {Error} Si el formato no es correcto
 * @example
 * // returns true
 * validarDNI("12345678Z");
 * @example
 * // returns false
 * validarDNI("12345678A");
 */
function validarDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const regex = /^(\d{8})([A-Z])$/i;
    
    const match = dni.match(regex);
    if (!match) {
        throw new Error("Formato de DNI inválido. Debe tener 8 dígitos y 1 letra");
    }
    
    const numero = parseInt(match[1]);
    const letra = match[2].toUpperCase();
    const letraEsperada = letras[numero % 23];
    
    return letra === letraEsperada;
}

/**
 * Muestra el resultado del cálculo factorial en la página
 * @returns {void}
 */
function mostrarFactorial() {
    try {
        const input = document.getElementById("factorialInput").value;
        const numero = parseInt(input);
        
        if (isNaN(numero)) {
            throw new Error("Por favor, introduce un número válido");
        }
        
        const resultado = factorial(numero);
        document.getElementById("resultadoFactorial").textContent = `✅ ${numero}! = ${resultado}`;
        document.getElementById("resultadoFactorial").className = "resultado-exito";
    } catch (error) {
        document.getElementById("resultadoFactorial").textContent = `❌ Error: ${error.message}`;
        document.getElementById("resultadoFactorial").className = "resultado-error";
    }
}

/**
 * Muestra el resultado del cálculo de media en la página
 * @returns {void}
 */
function mostrarMedia() {
    try {
        const input = document.getElementById("mediaInput").value;
        const resultado = mediaAritmetica(input);
        document.getElementById("resultadoMedia").textContent = `📊 Media: ${resultado.toFixed(2)}`;
        document.getElementById("resultadoMedia").className = "resultado-exito";
    } catch (error) {
        document.getElementById("resultadoMedia").textContent = `❌ Error: ${error.message}`;
        document.getElementById("resultadoMedia").className = "resultado-error";
    }
}

/**
 * Muestra si el texto es palíndromo en la página
 * @returns {void}
 */
function mostrarPalindromo() {
    try {
        const input = document.getElementById("palindromoInput").value;
        
        if (!input.trim()) {
            throw new Error("Por favor, introduce un texto");
        }
        
        const esPalindromoResultado = esPalindromo(input);
        const mensaje = esPalindromoResultado ? "✅ ¡Es un palíndromo!" : "❌ No es un palíndromo";
        document.getElementById("resultadoPalindromo").textContent = mensaje;
        document.getElementById("resultadoPalindromo").className = esPalindromoResultado ? "resultado-exito" : "resultado-error";
    } catch (error) {
        document.getElementById("resultadoPalindromo").textContent = `❌ Error: ${error.message}`;
        document.getElementById("resultadoPalindromo").className = "resultado-error";
    }
}

/**
 * Muestra el resultado de la validación del DNI en la página
 * @returns {void}
 */
function mostrarDNI() {
    try {
        const input = document.getElementById("dniInput").value;
        
        if (!input.trim()) {
            throw new Error("Por favor, introduce un DNI");
        }
        
        const esValido = validarDNI(input);
        const mensaje = esValido ? "✅ DNI válido" : "❌ DNI incorrecto";
        document.getElementById("resultadoDNI").textContent = mensaje;
        document.getElementById("resultadoDNI").className = esValido ? "resultado-exito" : "resultado-error";
    } catch (error) {
        document.getElementById("resultadoDNI").textContent = `❌ Error: ${error.message}`;
        document.getElementById("resultadoDNI").className = "resultado-error";
    }
}

