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

var partialResult = 0;

var resultWasClicked = false;

document.getElementById('add-button').addEventListener('click', add);

document.getElementById('subst-button').addEventListener('click', subtract);

document.getElementById('mult-button').addEventListener('click', multiply);

document.getElementById('div-button').addEventListener('click', divide);

document.getElementById('result-button').addEventListener('click', result);

function add() {
  resultReset();
  var number = document.getElementById('input-number').value;

  if (!Number(number)) {
    var mensajeDeError = 'Error';
    document.getElementById('input-number').value = mensajeDeError;
  } else {
    partialResult = Number(partialResult) + Number(number);
    document.getElementById('input-number').value = partialResult;
  }
}

function subtract() {
  resultReset();
  var number = document.getElementById('input-number').value;

  if (!Number(number)) {
    var mensajeDeError = 'Error';
    document.getElementById('input-number').value = mensajeDeError;
  } else {
    partialResult = Number(partialResult) - Number(number);
    document.getElementById('input-number').value = partialResult;
  }
}

function multiply() {
  resultReset();
  var number = document.getElementById('input-number').value;

  if (!Number(number)) {
    var mensajeDeError = 'Error';
    document.getElementById('input-number').value = mensajeDeError;
  } else {
    partialResult = Number(partialResult) * Number(number);
    document.getElementById('input-number').value = partialResult;
  }
}

function divide() {
  resultReset();
  var number = document.getElementById('input-number').value;

  if (!Number(number)) {
    var mensajeDeError = 'Error';
    document.getElementById('input-number').value = mensajeDeError;
  } else {
    partialResult = Number(partialResult) / Number(number);
    document.getElementById('input-number').value = partialResult;
  }
}

function result() {
  if (!resultWasClicked) {
    //hacemos la operación
    resultWasClicked = true;
    add();
  }
}

function resultReset() {
  resultWasClicked = false;
}
