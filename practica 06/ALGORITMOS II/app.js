var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptionAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var encryptedText = document.getElementById("decrypt-tt").value;
var decryptedText = document.getElementById("encrypt-tt").value;

// document.getElementById("encrypt-tt").addEventListener("change", encrypted_text);
document.getElementById("encrypt-btn").addEventListener("click", transformMessage);
// document.getElementById("encrypt-tt").addEventListener("change", decrypted_text);
// document.getElementById("decrypt-btn").addEventListener("click", decrypt);

//1. Encriptar el mensaje
//  - Escuchar la entrada de texto -> el textarea ✓ 
// Tengo que hacer una transformación letra a letra
//  - por lo que tengo que recorrer el string letra a letra 
// Cojo una letra, la busco en un alfabeto, me quedo con el índice 
// y la transformo a la posición que le corresponde en el siguiente alfabeto.
// Previo: Convertir el mensaje a minúsculas para encrptarlo mejor con text.toLowerCase


//paso 1: ¿Qué hace? recibir el mensaje y devolverlo transformado
function transformMessage (){
  var message = document.getElementById("encrypt-tt").value;
  var messageLowerCase = transformToLowerCase(message);

  var result = "";

  for (var letter of messageLowerCase){
    result = result + transformLetter(letter);
  }
  document.getElementById("decrypt-tt").value = result;
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

  for (var index= 0; index < plainAlphabet.length; index++) {
      if (plainAlphabet[index] === letter) return index;
  }
  return -1;
}

//paso 1.2.2.: buscar el index en el alfabeto encriptado y devolver la letra que corresponde.
var searchEncryptedLetter = (index) => {

   var encryptedLetter = encryptionAlphabet[index];

  return encryptedLetter;
}

//paso 2: 



