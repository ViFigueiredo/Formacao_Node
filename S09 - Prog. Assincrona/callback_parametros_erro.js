// passamos uma função para um método assincrono que após a sua conclução chama a função

const corpo = 'Teste de funções assincronas.'
const destinatario = 'teste@teste.com.br'
const remetente = 'vbf1994@gmail.com'

function enviarEmail(remetente, destinatario, corpo, callback) {
    const tempo = 3000 // em milissegundos
    // por padrão já é assincrono
    setTimeout(() => {

        // ... Lógica do envio de email

        var deuErro = false;

        if (deuErro) {
            callback(12, 'O envio de e-mail falhou.')
        } else {
            callback(12)
        }

    }, tempo)
}

console.log('Inicio do envio de e-mail!')
enviarEmail(remetente, destinatario, corpo, (time, erro) => {

    if (erro == undefined) { // sefor nulo -> OK
        console.log('Tudo ok!');
        console.log(`Tempo: ${time}s`);
    } else { // opa, deu erro
        console.log('Ocorreu um erro: ' + erro);
    }
})
