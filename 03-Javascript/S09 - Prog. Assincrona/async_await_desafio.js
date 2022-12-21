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

async function Email() {
    let id = await pegarId();
    let email = await buscarEmailNoBanco(id)
    enviarEmail('Olá, como vai?', email) // email demora muitos segundos na vida real, parando a aplicação se deixarmos sincrona
        .then(() => {
            console.log('E-mail enviado para o usuário com id: ' + id);
        }).catch((err) => {
            console.log(err);
        })
}

Email();

// pegarId()
//     .then((id) => {
//         buscarEmailNoBanco(id)
//             .then((email) => {
//                 enviarEmail('Olá, como vai?', email)
//                     .then(() => {
//                         console.log('E-mail enviado para o usuário com id: ' + id);
//                     })
//                     .catch(err => {
//                         console.log(err);
//                     })
//             })
//     })
//     .catch(() => {
//         console.log('Um erro qualquer.');
//     })


console.log('FIM');