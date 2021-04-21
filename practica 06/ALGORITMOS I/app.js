// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: 'Goma de borrar',
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Lápiz H2',
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Cinta rotular',
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Papelera plástico',
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Escuadra',
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: 'Pizarra blanca',
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Afilador',
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: 'Libro ABC',
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// APARTADO 1. Generar HTML Dinámico para representar selección de unidades
// para cada producto de la lista.

// HTML --> div in="product-list-container"

var container = document.getElementById('product-list-container');

var showProducts = () => {
  for (var product of products) {
    printProduct(product);
  }
};
function printProduct(product) {
  var index = 1;
  var indexElement = document.createElement('h3');
  indexElement.innerText = index;
  container.appendChild(indexElement);
  index++;

  var description = document.createElement('h3'); //creo el elemento
  description.innerText = product.description; //lo modifico. Es decir, le digo que muestre product.description
  container.appendChild(description); //lo añado. Es decir, lo añado como hijo en el HTML

  var price = document.createElement('h4');
  price.innerText = product.price + ' €';
  container.appendChild(price);

  var input = document.createElement('input');
  input.setAttribute('id', product.indexElement);
  input.setAttribute('type', 'number');
  input.setAttribute('value', product.units);
  input.addEventListener(
    'change',
    (event) => (product.units = event.target.value)
  ); //esta función almacena el valor en product.units cada vez que se produce un cambio
  container.appendChild(input);
}

showProducts(products);

//Cómo calcular: iterar por el objeto y empezar a multiplicar y sumar
//sólo cuando haga click en el botón calcular es cuando se tiene que calcular el total con los valores que estén introducidos y no antes.

document
  .getElementById('calcular-btn')
  .addEventListener('click', () => showResult()); //mas adelante llamará a function updatePage

// function getTotal(products) {
//   var total = 0;
//   for (product of products) {
//     total = total + ;
//     // return total;
//   }
// }

function showResult() {
  getSubtotal();
  getIVA();
}

function getSubtotal() {
  var subtotal = 0;
  for (product of products) {
    subtotal = subtotal + product.price * product.units;
  }
  document.getElementById('subtotal-output').value = subtotal + ' €';
}

function getIVA() {
  var iva = 0;
  for (product of products) {
    iva = iva + (product.price * product.units) * product.iva / 100;
  }
  document.getElementById('iva-output').value = iva + ' €';
}




// function updatePage() {
//   var total = getTotal(products);
//   var showResult= document.getElementById("total-output").value;

// showResult= total + " €";
// }

// to do:

// var disableEnableBtn = () => {
//   if (
//     //falta meter la condición: que todos los product.units valen 0 en el momento de calcular.

//   ) {
//     disableBtn = () => document.getElementById("calcular-btn").disabled = true; // Disabled
//   }else {
//     enableBtn = () => document.getElementById("calcular-btn").disabled = false; // Enabled
//   }
// }

// console.log();
