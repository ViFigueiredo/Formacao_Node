const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // informa qual o template engine a ser utilizado (pasta views por padrão)

// Rota -> Página Inicial
app.get('/:nome/:idade', (req, res) => {
    // res.send('Bem-vindo ao site Perguntas e Respostas!');

    // http://localhost:8080/Vinicius/29
    var nome = req.params.nome;
    var idade = req.params.idade;
    res.render('index', {
        nome, idade,
        lang: 'Javascript',
        empresa: 'Avantti'
    }); // views/index.ejs
});

// Config server
const porta = 8080;
app.listen(porta, () => {
    console.log(`App executando na porta: http://localhost:${porta}.`);
});
