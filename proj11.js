//criar objeto endereço
// Rua, cidade, CEP, exibir edereço


let endereco = {
    rua: 'josé lourenco',
    cidade: 'garça',
    cep: '17400308'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);