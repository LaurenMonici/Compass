//criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);
function somar(limite) {
    let multi3 = 0;
    let multi5 = 0;
    for(i =0;i <= limite;i++){
        if(i % 3 === 0)
         multi3 += i;
         if(i % 5 === 0)
         multi5 += i;
    }
    console.log(multi3 + multi5);
}
