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
//para cada producto de la lista.

// HTML --> div in="product-list-container"

var container = document.getElementById('product-list-container');

var showProducts = (productList) => {
  for (var product of productList) {
    var description = document.createElement('h4'); //creo el elemento
    description.innerText = product.description; //lo modifico. Es decir, le digo que muestre product.description
    container.appendChild(description); //lo añado. Es decir, lo añado como hijo en el HTML
    var price = document.createElement('h4');
    price.innerText = product.price;
    container.appendChild(price);
  }
};

showProducts(products);

// for(var product of productList) {
//   var price = document.createElement("h4");
//   price.innerText = productList.price;
//   container.appendChild(price);
// }

// var input = document.createElement("input");
// input.setAttribute("class", "product-unit");
// input.setAttribute("type", "number");
// input.setAttribute("value", 5);
// input.addEventListener("change", event => console.log(event.target.value));

// var main = document.getElementById("main");
// main.appendChild(input);

//A partir de una lista de productos, recorrerla y calcular coste de cada producto con más de 0 units.
//  * Limitar el número máximo de units que se pueden introducir al número del stock del producto.
//Para calcular el coste de cada producto:
//  * Coste total producto = units * price
//          (el subtotal es el sumatorio de todos los "coste total producto")
//  * IVA total producto = units * tax
//          (el IVA es un sumatorio de todos los "iva total producto")
//          (TOTAL = subtotal + IVA)
//            - switch (tax)
//              case "EXEMPT_TYPE" = "1"
//              case "LOWER_TYPE" = "1.4"
//              case "REGULAR_TYPE" = "1'21"
