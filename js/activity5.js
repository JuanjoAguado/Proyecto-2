/**
 * 🧮 CALCULADORA MATEMÁTICA AVANZADA
 * @module Calculadora
 * @description Módulo que contiene la función principal de la calculadora
 * @version 1.0.0
 * @author Estudiante
 */

/**
 * 🧮 FUNCIÓN PRINCIPAL DE LA CALCULADORA
 * Realiza operaciones matemáticas básicas con validación de errores
 * @function calcular
 * @returns {void} No retorna valor, muestra el resultado directamente en el DOM
 * @throws {Error} Cuando se introducen valores no numéricos
 * @throws {Error} Cuando se intenta dividir por cero
 * @throws {Error} Cuando se intenta calcular módulo por cero
 * @throws {Error} Cuando se selecciona una operación no válida
 * @example
 * // Ejemplo de uso en HTML:
 * // <button onclick="calcular()">Calcular</button>
 * @description
 * Esta función captura dos valores numéricos y una operación seleccionada
 * desde un formulario HTML. Realiza el cálculo correspondiente y muestra
 * el resultado en un elemento específico de la página.
 * 
 * Operaciones soportadas:
 * - Suma (+)
 * - Resta (-)
 * - Multiplicación (×)
 * - División (÷)
 * - Módulo (%)
 * - Potencia (^) - calculada con bucle sin usar **
 * 
 * Características:
 * - Validación de entrada numérica
 * - Manejo de errores para división por cero
 * - Cálculo de potencia mediante bucle
 * - Soporte para exponentes negativos
 */
function calcular() {
  /**
   * @type {number}
   * @description Primer valor numérico capturado del formulario
   */
  const v1 = parseFloat(document.getElementById("valor1").value);
  
  /**
   * @type {number}
   * @description Segundo valor numérico capturado del formulario
   */
  const v2 = parseFloat(document.getElementById("valor2").value);
  
  /**
   * @type {string}
   * @description Operación matemática seleccionada por el usuario
   * @validValues ["suma", "resta", "multiplicacion", "division", "modulo", "potencia"]
   */
  const operacion = document.getElementById("operacion").value;
  
  /**
   * @type {HTMLElement}
   * @description Elemento HTML donde se mostrará el resultado del cálculo
   */
  const resultado = document.getElementById("resultado");

  // ✅ VALIDACIÓN DE VALORES NUMÉRICOS
  if (isNaN(v1) || isNaN(v2)) {
    resultado.textContent = "❌ Error: Introduce dos valores numéricos válidos.";
    resultado.className = "resultado-error";
    return;
  }

  /**
   * @type {number}
   * @description Variable que almacenará el resultado del cálculo matemático
   */
  let res;

  // 🔄 SWITCH PARA MANEJAR DIFERENTES OPERACIONES MATEMÁTICAS
  switch (operacion) {
    case "suma": 
      /**
       * @description Realiza la suma aritmética de dos números
       * @operation v1 + v2
       * @returns {number} Resultado de la suma
       */
      res = v1 + v2;
      break;
    
    case "resta": 
      /**
       * @description Realiza la resta aritmética de dos números
       * @operation v1 - v2
       * @returns {number} Resultado de la resta
       */
      res = v1 - v2;
      break;
    
    case "multiplicacion": 
      /**
       * @description Realiza la multiplicación aritmética de dos números
       * @operation v1 × v2
       * @returns {number} Resultado de la multiplicación
       */
      res = v1 * v2;
      break;
    
    case "division":
      // 🚫 VALIDAR DIVISIÓN POR CERO
      if (v2 === 0) {
        resultado.textContent = "❌ Error: División por cero no permitida.";
        resultado.className = "resultado-error";
        return;
      }
      /**
       * @description Realiza la división aritmética de dos números
       * @operation v1 ÷ v2
       * @returns {number} Resultado de la división
       */
      res = v1 / v2;
      break;
    
    case "modulo":
      // 🚫 VALIDAR MÓDULO POR CERO
      if (v2 === 0) {
        resultado.textContent = "❌ Error: Módulo por cero no permitido.";
        resultado.className = "resultado-error";
        return;
      }
      /**
       * @description Calcula el resto de la división (módulo)
       * @operation v1 % v2
       * @returns {number} Resto de la división
       */
      res = v1 % v2;
      break;
    
    case "potencia":
      /**
       * @description Calcula la potencia usando bucle (sin operador **)
       * @operation v1^v2
       * @returns {number} Resultado de la potencia
       * @algorithm 
       * 1. Inicializar resultado en 1
       * 2. Usar valor absoluto del exponente para el bucle
       * 3. Multiplicar repetidamente la base
       * 4. Invertir resultado si el exponente es negativo
       */
      res = 1;
      const exponente = Math.abs(v2);
      
      // 🔁 BUCLE PARA CÁLCULO DE POTENCIA
      for (let i = 0; i < exponente; i++) {
        res *= v1;
      }
      
      // 🔄 AJUSTE PARA EXPONENTES NEGATIVOS
      if (v2 < 0) {
        res = 1 / res;
      }
      break;
    
    default:
      // 🚫 MANEJAR OPERACIÓN NO VÁLIDA
      resultado.textContent = "❌ Error: Operación no válida seleccionada.";
      resultado.className = "resultado-error";
      return;
  }
  
  // 📤 MOSTRAR RESULTADO EN LA PÁGINA
  resultado.textContent = `✅ Resultado: ${res}`;
  resultado.className = "resultado-exito";
}

// 📋 EJEMPLOS DE USO PARA PRUEBAS (opcional)
/**
 * @example <caption>Ejemplo de suma</caption>
 * // Valores: 5 y 3, Operación: suma
 * // Resultado: 8
 * 
 * @example <caption>Ejemplo de potencia</caption>
 * // Valores: 2 y 3, Operación: potencia  
 * // Resultado: 8 (calculado con bucle: 2×2×2)
 * 
 * @example <caption>Ejemplo con error</caption>
 * // Valores: 5 y 0, Operación: división
 * // Resultado: "Error: División por cero no permitida."
 */