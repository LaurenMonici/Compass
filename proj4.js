// velocidade máxima é 70
// a cada 5km acima do limite, mais um ponto na carteira
// Math.Floor
// caso pontos -> 12 "carteira suspendida"


verificarVelocidade(75);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else{
        const pontos = Math.floor(((velocidade-velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos', pontos);

    }
}

