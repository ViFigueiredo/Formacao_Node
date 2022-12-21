const fs = require('fs');

function modificarArquivo(nome, curso, categoria) {
    // leitura
    fs.readFile('./arquivo.json', { encoding: 'utf-8' }, (err, dados) => {

        if (err) console.log('Um erro aconteceu.')
        else {
            var conteudo = JSON.parse(dados);

            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria

            // escrita
            fs.writeFile('./arquivo.json', JSON.stringify(conteudo), (err) => {
                if (err) console.log('Um erro aconteceu.')
            })

            console.log(conteudo);
        }
    })
}

modificarArquivo("nome alterado", "curso alterado", "categoria alterada")