
function acao() {
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

acao()
    // desestruturação 
    .then(({time, to}) => {
        // console.log('Ação realizada com sucesso.');
        console.log(`Time: ${time}`);
        console.log(`To: ${to}`);
    })
    // sempre que utilzar promisses, tratamos os erros
    .catch((erro) => {
        console.log(`Encontramos um falha: ${erro}`);
    })