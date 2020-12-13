const product = { count: 3, price: 12.55, type: 'ropa' };

//Calcular precio total

// let getTotal;
// if (product.count > 0) {
//   getTotal = product.count * product.price;
// }else {
//   getTotal = 0
// }

//Hago un ternario

product.count > 0
  ? (getTotal = product.count * product.price)
  : (product.count = 0);

console.log(getTotal);

// Calcular el IVA

let typeVAT;

switch (product.type) {
  case 'alimentación':
    typeVAT = 0.10;
    break;
  case 'libro':
    typeVAT = 0.04;
    break;
  default:
    typeVAT = 0.21;
}

console.log(typeVAT)

//Aplicar el IVA al Total

const VAT = getTotal * typeVAT;

console.log(getTotal * typeVAT);

console.log(getTotal + VAT);


