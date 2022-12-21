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
            var deuErro = false;
            // console.log('Ação iniciada!');
            // condicao ? true : false
            (!deuErro) ?
                // apenas um valor de retorno, podendo ser {}, [], "", int
                resolve({ time: 6, to: 'vinicius@email.com' }) // then 
                :
                reject('Fila cheia.') // catch
        }, 3000)
    })
}

console.log('INICIO');
// Promisse Hell
pegarId()
    .then((id) => {
        buscarEmailNoBanco(id)
            .then((email) => {
                enviarEmail('Olá, como vai?', email)
                    .then(() => {
                        console.log('E-mail enviado para o usuário com id: ' + id);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    })
    .catch(() => {
        console.log('Um erro qualquer.');
    })
console.log('FIM');