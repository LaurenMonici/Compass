//Projeto 3
//divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisível por 3 e 5 => fizzbuzz
//não divisivel por 3 ou 5 => entrada
//não é um número => 'não é um número'

const resultado = fizzBuzz(55);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}