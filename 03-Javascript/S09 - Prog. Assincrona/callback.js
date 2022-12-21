// passamos uma função para um método assincrono que após a sua conclução chama a função

const corpo = 'Teste de funções assincronas.'
const destinatario = 'teste@teste.com.br'
const remetente = 'vbf1994@gmail.com'

function enviarEmail(remetente, destinatario, corpo, callback) {
    const tempo = 3000 // em milissegundos
    // por padrão já é assincrono
    setTimeout(() => {
        console.log(`
    Para: ${destinatario}
    ---------------------------
    ${corpo}
    ---------------------------
    De: ${remetente}
    `)
        callback()
    }, tempo)
}

console.log('Inicio do envio de e-mail!');
enviarEmail(remetente, destinatario, corpo, () => {
    console.log('Isso é um callback');
    console.log('Ele acaba de ser executado');
    console.log('Seu e-mail foi enviado. Deve chegar em breve.');
    console.log('Tudo ok!');
});
