// //Generador aleatorio de numeros: 10 números aleatorios entre el 1 y el 100

// //Primer método, más sencillo:

// //con Math.ceil podemos obtener resultados aleatorios de 1 al 100 incluidos,
// // ya que el redondeo es a la alta, de tal modo que incluyo los números 1 y 100.
// var myRandomDraw = () => Math.ceil(Math.random() * 100);

// //Para terminar, sólo necesito mostrarlo por pantalla 10 veces:
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());
// console.log(myRandomDraw());

// //Segundo método: //usando Math.floor tengo que añadir "+1"

// var myRandomDraw2 = () => Math.floor(Math.random() * 100) + 1;

// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());
// console.log(myRandomDraw2());


//Devuélveme un array de n elementos
var generateRandomPickArray = (n, min, max) => {
  var result = [];

  for (var index = 0; index < n; index++) {
    result[index] = generateSingleRandomNumber(min, max);
  }

  return result;
};

var generateSingleRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1);
};

console.log(generateRandomPickArray(10, 1, 100));
