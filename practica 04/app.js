function add() {
 
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (!Number(numberA) || !Number(numberB)) {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('numberC').value = mensajeDeError;
  }
    var result = Number(numberA) + Number(numberB);
    document.getElementById('numberC').value = result;
  }

document.getElementById('add-button').addEventListener('click', add);

function subtract() {
  reset();
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (numberA == '' || numberB == '') {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('textError').value = mensajeDeError;
  } else {
    var result = parseFloat(numberA) - parseFloat(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('subst-button').addEventListener('click', subtract);

function multiply() {
  reset();
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (numberA == '' || numberB == '') {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('textError').value = mensajeDeError;
  } else {
    var result = parseFloat(numberA) * parseFloat(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('mult-button').addEventListener('click', multiply);

function divide() {
  reset();
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  if (numberA == '' || numberB == '') {
    //sacar pantalla el valor de error
    var mensajeDeError = 'Error';
    document.getElementById('textError').value = mensajeDeError;
  } else {
    var result = parseFloat(numberA) / parseFloat(numberB);
    document.getElementById('numberC').value = result;
  }
}

document.getElementById('div-button').addEventListener('click', divide);

function reset() {
  // document.getElementById('textError').value = '';
  document.getElementById('numberC').value = '';
}

//Opcional: Si alguno de los operandos es vacío, muestra como resultado "Error".

//cuando haces click en todos los botones de operación
//y al menos uno de los dos campos de operando está vacío,
//imprimir en el campo de resultado : "Error"

//cuando numberC= "", imprimir en pantalla: "Error", en otro input
