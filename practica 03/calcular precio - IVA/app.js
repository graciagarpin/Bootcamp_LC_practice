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

let typeIVA;

switch (product.type) {
  case 'alimentación':
    typeIVA = 0.10;
    break;
  case 'libro':
    typeIVA = 0.04;
    break;
  default:
    typeIVA = 0.21;
}

console.log(typeIVA)

// switch (getVAT) {
//   case product.type = 'alimentación':
//     getVAT = 0.10* product.price;
//     break;
//   case product.type = 'libro':
//     getVAT = 0.04 * product.price;
//     break;
//   default:
//     getVAT = 0.21 * product.price;



//Aplicar el IVA al Total

const VAT = getTotal * typeIVA;

console.log(getTotal * typeIVA);

console.log(getTotal + VAT);


