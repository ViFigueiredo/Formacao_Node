
// funções assincronas possuem tempo de resposta indefinido e podem ser executadas ao mesmo tempo

// já as demais (sync) precisam de uma ordem específica para serem executadas, pois dependem de outras funções para continuidade de sua lógica

function name(params) {
    checkEmail() // async A
    hashSenha() // async B
    uploadFile() // C
    saveUser() //async D - precisa de A e B
    sendEmail() // E - precisa de A
}

// ordem de execução:
// 1º -> A, B, C
// 2º -> D, E


const corpo = 'Teste de funções assincronas.'
const destinatario = 'teste@teste.com.br'
const remetente = 'vbf1994@gmail.com'

function enviarEmail(corpo, destinatario, remetente) {
    const tempo = 3000 // em milissegundos
    // por padrão já é assincrono
    setTimeout(() => {
        console.log(`
    Para: ${destinatario}
    ---------------------------
    ${corpo}
    ---------------------------
    De: ${remetente}
    `);
    }, tempo)
}

console.log('Inicio do envio de e-mail!');
enviarEmail(remetente, destinatario, corpo);
console.log('Seu e-mail foi enviado. Deve chegar em breve.');
console.log('Tudo ok!');

// Evolução de funções assincronas
// callbacks < Promisses < Async/Await