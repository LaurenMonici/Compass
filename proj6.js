//criar um método para ler propriedades de um objeto e exibir somente string

const filme = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'otário',
    personagem: 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}