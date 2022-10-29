const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Banco de dados
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

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
    Pergunta.findAll({
        raw: true,
        order: [['id', 'DESC']] // ASC = crescente || DESC = decrescente
    }).then(perguntas => { // retorna todas as perguntas e renderiza no index
        // console.log(perguntas);
        res.render('index', { perguntas });
    })
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

app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id } // localiza a pergunta pelo id
    }).then(pergunta => {
        if (pergunta != undefined) { // encontrada
            Resposta.findAll({
                where: { perguntaId: pergunta.id }, // retorna todas as respostas que possuem o id em questão
                order: [['id', 'DESC']] // ASC = crescente || DESC = decrescente
            }).then(respostas => { res.render('pergunta', { pergunta, respostas }) }); // pergunta.ejs

        } else { // não encontrada
            res.redirect('/');
        }
    })
})

// Respondendo as perguntas
app.post('/responder', (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({ corpo, perguntaId })
        .then(() => {
            res.redirect(`/pergunta/${perguntaId}`); // redireciona para a pg da pergunta respondida
        });
});

// Config server
const porta = 8080;
app.listen(porta, () => {
    console.log(`App executando na porta: http://localhost:${porta}.`);
});
