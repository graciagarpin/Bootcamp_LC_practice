function add() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (!Number(numberA) || !Number(numberB)) {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('numberC').value = mensajeDeError;
  } else {
    var result = Number(numberA) + Number(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('add-button').addEventListener('click', add);

function subtract() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (!Number(numberA) || !Number(numberB)) {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('numberC').value = mensajeDeError;
  } else {
    var result = Number(numberA) - Number(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('subst-button').addEventListener('click', subtract);

function multiply() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (!Number(numberA) || !Number(numberB)) {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('numberC').value = mensajeDeError;
  } else {
    var result = Number(numberA) * Number(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('mult-button').addEventListener('click', multiply);

function divide() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (!Number(numberA) || !Number(numberB)) {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('numberC').value = mensajeDeError;
  } else {
    var result = Number(numberA) / Number(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('div-button').addEventListener('click', divide);

function reset() {
  // document.getElementById('numberC').value = '';
  document.getElementById('numberC').value = '';
}

//Opcional: Si alguno de los operandos es vacío, muestra como resultado "Error".

//cuando haces click en todos los botones de operación
//y al menos uno de los dos campos de operando está vacío,
//imprimir en el campo de resultado : "Error"

//cuando numberC= "", imprimir en pantalla de input: "Error"
