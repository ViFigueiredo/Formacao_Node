function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500);
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('vinicius@email.com')
        }, 2000);
    })
}

function enviarEmail() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var deuErro = true;
            (!deuErro) ?
                resolve({ time: 6, to: 'vinicius@email.com' }) // then 
                :
                reject('Fila cheia.') // catch
        }, 3000)
    })
}

async function Email() {
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id)

    try { // tratamento de exceções - success/failure
        await enviarEmail('Olá, como vai?', email) // await -> abrimos mão do catch()
        console.log('E-mail enviado para o usuário com id: ' + id);
    }
    catch (err) {
        console.log(err);
    }
}

Email();