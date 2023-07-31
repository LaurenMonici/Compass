function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode entrar!'
    }
}