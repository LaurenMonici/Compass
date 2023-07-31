//criar função paa mostra números primos

//primos
//compostos

exibirPrimos(15);

function exibirPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++){
          let ePrimo = true;

          for(let divisor = 2; divisor < numero; divisor++){
               if(numero % divisor === 0) {
                ePrimo = false;
                break
               }
          }

          if (ePrimo) console.log(numero);
    }
}






exibirPrimos(15);

function exibirPrimos(limite){
    for (let numero = 2; numero <= limite; numero++){
          if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++){
          if(numero % divisor === 0) {
            return false;
          }
    }
    return true;
}