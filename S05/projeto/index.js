const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Banco de dados
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!');
    })
    .catch((msgErr) => {
        console.log(msgErr);
    })

app.set('view engine', 'ejs'); // informa qual o template engine a ser utilizado (pasta views por padrão)
app.use(express.static('public')); // arquivos estáticos que não de responsabilidade do backend

app.use(bodyParser.urlencoded({ extended: false })); // decodifica dados de formulário
app.use(bodyParser.json()); // permite uso de json em envio de formulário (API)

// Rota -> Página Inicial
// views/index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo; // html name=titulo
    var descricao = req.body.descricao; // html name=descricao
    Pergunta.create({ titulo, descricao }) // insere os dados do form na tabela
        .then(() => {
            res.redirect('/');
        })
});

// Config server
const porta = 8080;
app.listen(porta, () => {
    console.log(`App executando na porta: http://localhost:${porta}.`);
});
