const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // informa qual o template engine a ser utilizado (pasta views por padrão)

// Rota -> Página Inicial
// views/index.ejs
app.get('/:nome/:idade', (req, res) => {
    // res.send('Bem-vindo ao site Perguntas e Respostas!');

    // http://localhost:8080/Vinicius/29
    var nome = req.params.nome;
    var idade = req.params.idade;
    var exibirMsg = true;

    var produtos = [
        {nome: 'Doritos', preco: 3.14},
        {nome: 'Coca-cola', preco: 5},
        {nome: 'Leite', preco: 1.45},
        {nome: 'Redbull', preco: 12.5},
        {nome: 'Biscoito', preco: 3.45}
    ];

    res.render('index', {
        nome, idade, produtos,
        lang: 'Javascript',
        empresa: 'Avantti',
        msg: exibirMsg,
    });
});

// Config server
const porta = 8080;
app.listen(porta, () => {
    console.log(`App executando na porta: http://localhost:${porta}.`);
});
