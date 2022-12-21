
function pegarUsuarios() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                { nome: 'Vinicius', lang: 'JS' },
                { nome: 'Rafael', lang: 'C#' },
                { nome: 'Davi', lang: 'Java' },
                { nome: 'Lucas', lang: 'Python' },
            ])
        }, 3000)
    })
}

// torna f() assincronas em sincronas
async function principal() {
    var usuarios = await pegarUsuarios()
    console.log(usuarios);
}

principal();