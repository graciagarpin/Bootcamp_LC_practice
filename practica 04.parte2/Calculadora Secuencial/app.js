
// Clicka una operación.
// A continuación introduce un segundo número.
// Clicka de nuevo otra operación.
// Y así sucesivamente... hasta que pulsa el botón de resultado.

//LA CLAVE ES: ACUMULAR EL RESULTADO PARCIAL Para ello, con cada click que el usuario hace en una operación, deberás:
// Extraer el operando que hay en el input.
// Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado parcial y el nuevo operando.
// Almacenar la operación actual para la siguiente vez.

//Inicializacion
document.getElementById('input-number').value = 0;
let partialResult = 0;
document.getElementById('add-button').addEventListener('click', add,);

function add() {

  var number = document.getElementById('input-number').value; 
  partialResult = parseFloat(partialResult) + parseFloat(number);
  document.getElementById('input-number').value = partialResult;
}

//hacer reset de pantalla

function cleanNumber() {
  document.getElementById('input-number').value = '';
}


