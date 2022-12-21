const fs = require('fs');

// leitura
fs.readFile('./arquivo.json', { encoding: 'utf-8' }, (err, dados) => {

    if (err) console.log('Um erro aconteceu.')
    else {
        var conteudo = JSON.parse(dados);

        conteudo.nome = "Vinicius Belesa de Figueiredo"
        conteudo.curso = "Formação Webmaster"
        conteudo.categoria = "Programação Web"

        // escrita
        fs.writeFile('./arquivo.json', JSON.stringify(conteudo), (err) => {
            if (err) console.log('Um erro aconteceu.')
        })

        console.log(conteudo);
    }
})