
function acao() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var deuErro = true;
            // console.log('Ação iniciada!');
            (!deuErro) ? resolve() : reject()
            // condicao ? true : false
        }, 3000)
    })
}

acao()
    .then(() => {
        console.log('Ação realizada com sucesso.');
    })
    // sempre que utilzar promisses, tratamos os erros
    .catch(() => {
        console.log('Encontramos um falha.');
    })