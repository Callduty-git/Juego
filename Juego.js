function getRandomNumber() {
  const random = Math.random();
  const multiplied = random * 10;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;
  return result;
}

let numero = parseInt(prompt("Elige un número del 1 al 10"));
let numero1 = parseInt(prompt("Elige otro número del 1 al 10"));
let numero2 = parseInt(prompt("Elige el último número del 1 al 10"));

let randomNumber = getRandomNumber();
alert("El número aleatorio es: " + randomNumber);

if (numero === randomNumber || numero1 === randomNumber || numero2 === randomNumber) {
  alert("¡Felicidades, has acertado un número!");
} else {
  alert("Lo siento, has fallado. El número era: " + randomNumber);
}