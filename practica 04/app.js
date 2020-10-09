document.getElementById('numberA').value = 0;
document.getElementById('numberB').value = 0;

function add() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  var result = parseFloat(numberA) + parseFloat(numberB);
  document.getElementById('numberC').value = result;
}

document.getElementById('add-button').addEventListener('click', add);

function subtract() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  var result = parseFloat(numberA) - parseFloat(numberB);
  document.getElementById('numberC').value = result;
}

document.getElementById('subst-button').addEventListener('click', subtract);

function multiply() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  var result = parseFloat(numberA) * parseFloat(numberB);
  document.getElementById('numberC').value = result;
}

document.getElementById('mult-button').addEventListener('click', multiply);

function divide() {
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;

  var result = parseFloat(numberA) / parseFloat(numberB);
  document.getElementById('numberC').value = result;
}

document.getElementById('div-button').addEventListener('click', divide);
