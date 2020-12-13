//Generador aleatorio de numeros: 10 números aleatorios entre el 1 y el 100


//Primer método, más sencillo:

//con Math.ceil podemos obtener resultados aleatorios de 1 al 100 incluidos, 
// ya que el redondeo es a la alta, de tal modo que incluyo los números 1 y 100.
var myRandomDraw = () => Math.ceil(Math.random() * 100);

//Para terminar, sólo necesito mostrarlo por pantalla 10 veces:
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());
console.log(myRandomDraw());


