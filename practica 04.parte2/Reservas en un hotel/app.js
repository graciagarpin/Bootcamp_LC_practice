var tarifaDeLaHab = 0;
var usoSpa = 0;
var factorDeOcupacion = 0;
var numeroDeNochesDeHab = 0;
var numeroDeNochesDeParking = 0;
var cuentaTotal = 0;

document
  .getElementById('tarifa-hab')
  .addEventListener('change', actualizacionTarifaHab);
document
  .getElementById('cbox-usoSpa')
  .addEventListener('click', actualizacionUsoSpa);
document
  .getElementById('ocupacion-hab')
  .addEventListener('change', actualizacionOcupacion);
document
  .getElementById('input-nochesHab')
  .addEventListener('change', actualicionNumeroNoches);
document
  .getElementById('input-nochesParking', actualizacionNumerNochesParking)
  .addEventListener('change', actualizacionNumerNochesParking);
document
  .getElementById('button-calcular')
  .addEventListener('click', calculoTotal);
document.getElementById('output-total').value = 0;

function actualizacionTarifaHab() {
  var tarifaSeleccionada = document.getElementById('tarifa-hab').value;
  switch (tarifaSeleccionada) {
    case 'Standard':
      tarifaDeLaHab = 100;
    case 'Junior Suite':
      tarifaDeLaHab = 120;
    case 'Suite':
      tarifaDeLaHab = 150;
  }
}

function actualizacionUsoSpa() {
  if (document.getElementById('cbox-usoSpa').checked) {
    usoSpa = 20;
  } else {
    usoSpa = 0;
  }
}

function actualizacionOcupacion() {
  var ocupacionSeleccionada = document.getElementById('ocupacion-hab').value;
  switch (ocupacionSeleccionada) {
    case 'Individual':
      factorDeOcupacion = 0.75;
    case 'Doble':
      factorDeOcupacion = 1;
    case 'Triple':
      factorDeOcupacion = 1.25;
  }
}

function actualicionNumeroNoches() {
  numeroDeNochesDeHab = document.getElementById('input-nochesHab').value;
}

function actualizacionNumerNochesParking() {
  numeroDeNochesDeParkingIndicado = document.getElementById(
    'input-nochesParking'
  ).value;
  numeroDeNochesDeParking = numeroDeNochesDeParkingIndicado * 10;
}

function calculoTotal() {
  cuentaTotal =
    (tarifaDeLaHab + usoSpa) * factorDeOcupacion * numeroDeNochesDeHab +
    numeroDeNochesDeParking;
  console.log(cuentaTotal);
  document.getElementById('output-total').value = cuentaTotal;
}

// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.
//numeroDeNochesDeHab *
