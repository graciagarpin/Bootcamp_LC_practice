var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptionAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

document.getElementById("encrypt-btn").addEventListener("click", transformToEncryptedMessage);
document.getElementById("decrypt-btn").addEventListener("click", transformToDecryptedMessage);


//1. Encriptar el mensaje
//  - Escuchar la entrada de texto -> el textarea ✓ 
// Tengo que hacer una transformación letra a letra
//  - por lo que tengo que recorrer el string letra a letra 
// Cojo una letra, la busco en un alfabeto, me quedo con el índice 
// y la transformo a la posición que le corresponde en el siguiente alfabeto.
// Previo: Convertir el mensaje a minúsculas para encrptarlo mejor con text.toLowerCase


//paso 1: ¿Qué hace? recibir el mensaje y devolverlo transformado
function transformToEncryptedMessage (){
  var message = document.getElementById("decrypt-tt").value;
  var messageLowerCase = transformToLowerCase(message);

  var result = "";

  for (var letter of messageLowerCase){
    result = result + transformLetter(letter);
  }
  document.getElementById("encrypt-tt").value = result;
}

//paso 1.1: transformar el mensaje a minúsculas.
function transformToLowerCase(message) {
  return message.toLowerCase();
}

//paso 1.2: transformar una letra en una letra encriptada
var transformLetter = letter => {
  var letterIndex = searchIndex(letter);
  var encryptedLetter = searchEncryptedLetter(letterIndex);
  
  return encryptedLetter;
}

//paso 1.2.1: buscar la letra en el alfabeto plano y devolver su index (posición).
var searchIndex = (letter) => {

  return plainAlphabet.indexOf(letter);
}

//paso 1.2.2.: buscar el index en el alfabeto encriptado y devolver la letra que corresponde.
var searchEncryptedLetter = (index) => {

   var encryptedLetter = encryptionAlphabet[index];

  return encryptedLetter;
}

//paso 2: Recibe el mensaje encriptado y lo devuelve desencriptado.

function transformToDecryptedMessage () {
  var message = document.getElementById("encrypt-tt").value;
  message =  transformToLowerCase(message); 
  
  var result = "";
  //el mensaje en minúsculas hay que leerlo letra a letra para desencriptarlo, para eso
  //creamos un for que itere por cada elemento del mensaje.

  for (var letter of message ) {
    result = result + decryptLetter(letter);
  }
  //busco en el alfabeto encriptado la posicion de la letra.
  // pintarlo en pantalla el result
  document.getElementById("decrypt-tt").value = result;
}

function decryptLetter (letter) {
  var index = searchIndexOfLetter(letter);
  var decryptedLetter = searchForLetterWithIndex(index);

  return decryptedLetter;
}

function searchIndexOfLetter(letter) {
  
  return encryptionAlphabet.indexOf(letter);
}

function searchForLetterWithIndex(index){
  var decryptedLetter = plainAlphabet[index]; 
  return decryptedLetter;
}

decryptedLetter = document.getElementById("decrypt-tt").value;
