
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
/*
  function sumarflecha(a,b) => {

  }
    return a + b ;

    function restarfecha (a,b) =>  {
    }
      return a - b;


    function miltiplicarfecha (a,b) => {

    }
      return a * b;

      function dividirfecha (a,b){
        return a / b;

      }
      
      console.log (sumarflecha(2,3));
      console.log (restarfecha(30,10));
      console.log (multiplicarfecha(50,12));
      console.log (dividirfecha(100,5));
      

      function cuentaAtras(numero) {
        // Condición base: Si el número que recibe es
        // menor de 0 entonces salimos de la función
        if (numero < 0) { return }
      
        // Si el número era mayor o igual a 0, lo mostramos
        console.log(numero)
      
        // Y llamamos a la función con el número anterior
        cuentaAtras(numero - 1)
      }

      console.log("cuentaAtras(5")

    const suma = (n) => {
      if (n <= 0) return 0; // Caso base
      return n + suma(n - 1); // Llamado recursivo
    };
    
    // Ejemplo de uso
    console.log(suma(3)); // 6 (1  + 2 + 3)
    console.log(suma(5)); // 15 (1 + 2 + 3 + 4 + 5)
    console.log(suma(10)); // 55 (1 + 2 + ... + 10)

    */