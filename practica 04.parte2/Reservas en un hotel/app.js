//Variable initialization

var roomRate = 0;
var spaUse = 0;
var occupationFactor = 0.75;
var numberOfRoomNights = 0;
var numberOfParkingNights = 0;
var totalCount = 0;

document
  .getElementById('room-rate')
  .addEventListener('change', updateRoomRate);
document
  .getElementById('cbox-spaUse')
  .addEventListener('click', updateSpaUse);
document
  .getElementById('room-ocupation')
  .addEventListener('change', occupationFactorUpdate);
document
  .getElementById('roomNights-input')
  .addEventListener('change', updateNumberOfRoomNights);
document
  .getElementById('parkingNights-input', updateNumberOfParkingNights)
  .addEventListener('change', updateNumberOfParkingNights);
// document
//   .getElementById('button-calcular')
//   .addEventListener('click', totalCalculation);
document.getElementById('total-output').value = 0;

function updateRoomRate() {
  var tarifaSeleccionada = document.getElementById('room-rate').value;
  switch (tarifaSeleccionada) {
    case 'Standard':
      roomRate = 100;
      break;
    case 'Junior Suite':
      roomRate = 120;
      break;
    case 'Suite':
      roomRate = 150;
      break;
  }
  totalCalculation();
}

function updateSpaUse() {
  if (document.getElementById('cbox-spaUse').checked) {
    spaUse = 20;
  } else {
    spaUse = 0;
  }
  totalCalculation();
}

function occupationFactorUpdate() {
  var ocupacionSeleccionada = document.getElementById('room-ocupation').value;
  switch (ocupacionSeleccionada) {
    case 'Individual':
      ocucupationFactor = 0.75;
      break;
    case 'Doble':
      ocucupationFactor = 1;
      break;
    case 'Triple':
      ocucupationFactor = 1.25;
      break;
  }
  totalCalculation();
}

function updateNumberOfRoomNights() {
  numberOfRoomNights = document.getElementById('roomNights-input').value;
  totalCalculation();
}

function updateNumberOfParkingNights() {
  numberOfParkingNightsIndicado = document.getElementById(
    'parkingNights-input'
  ).value;
  numberOfParkingNights = numberOfParkingNightsIndicado * 10;
  totalCalculation();
}

function totalCalculation() {
  totalCount =
    (roomRate + spaUse) * ocucupationFactor * numberOfRoomNights +
    numberOfParkingNights;
  console.log(totalCount);
  document.getElementById('total-output').value = totalCount + " €";
}

