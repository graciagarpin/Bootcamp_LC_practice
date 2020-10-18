//Mostrar una estructura de carrito de la compra.

const customerBasket = [
  { id: '1', product: 'cepillo', amount: '2', price: '2.10', prime: true },
  { id: '2', product: 'baguette', amount: '4', price: '0.80', prime: false },
  { id: '3', product: 'huevos', amount: '6', price: '0.35', prime: false },
  { id: '4', product: 'chocolatina', amount: '1', price: '1.49', prime: true },
  { id: '5', product: 'salchichón', amount: '1', price: '3.10', prime: true },
];

console.log(customerBasket.length);

//Listar todos los productos.

var total = 0;
for (i in customerBasket) {
  console.log('La lista de la compra contiene ' + customerBasket[i].product);
}

//Eliminar un producto del carrito de la compra.
//por ejemplo, voy a eliminar el primer elemento de la lista, "cepillo".

console.log(customerBasket.shift());

console.log(customerBasket);

for (i in customerBasket) {
  console.log('La lista de la compra contiene ' + customerBasket[i].product);
}

// Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).

for (element of customerBasket) {
  total += element.amount * element.price;
}

console.log(total);

console.log(customerBasket.length);

//Filtrar por productos que sean prime.

let contador = 0;

while (contador < customerBasket.length) {
  if (customerBasket[contador].prime) {
    console.log(
      'El producto ' + customerBasket[contador].product + ' es prime'
    );
  }

  contador++;
}

let contador2 = 0;

//Vuelvo a listar los productos de la lista

for (
  contador2 = customerBasket.length;
  contador2 > 0;
  contador2 = contador2 - 1
) {
  let index = contador2 - 1;
  console.log(
    'La lista de la compra contiene este producto:  ' +
      customerBasket[index].product
  );
}

//Opcional

// Si todos los productos son prime que diga "Gastos de envió cero", si no "Con gastos de envío.
//Vamos a suponer que todos los elementos de la cesta son prime

let todosSonPrime = true;

//Vamos a verificar uno a uno si hay al menos un elemento que no es prime y en ese caso resolver y salir del bucle.

for (element of customerBasket) {
  if (element.prime == false) {
    todosSonPrime = false;
    break;
  }
}

//Imprimir en consola el resultado

if (todosSonPrime) {
  console.log('Gastos de envío cero');
} else {
  console.log('Con gastos de envío');
}
