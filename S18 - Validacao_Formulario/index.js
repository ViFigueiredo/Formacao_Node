const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('express-flash');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(flash());

app.get('/', (req, res) => {
    // console.log('Exec...');
    // res.send('Executando...');
    res.render('index');
});

app.post('/form', (req, res) => {
    let { email, nome, pontos } = req.body;

    let emailError;
    let pontosError;
    let nomeError;

    if (email == undefined || email == '') {
        emailError = 'E-mail não pode ser vazio!'
        console.log(emailError);
    }

    if (pontos == undefined || pontos < 20) {
        pontosError = 'Você não pode ter menos de 20 pontos!'
        console.log(pontosError);
    }

    if (nome == undefined || nome == '') {
        nomeError = 'Nome não pode ser vazio!'
        console.log(nomeError);
    }

    if (nome.length < 3) {
        nomeError = 'Nome muito pequeno!'
        console.log(nomeError);
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        // res.send('Preencha o formulário corretamente!')
        res.redirect('/');
    } else {
        res.send('Formulário enviado com sucesso!');
    }

    // res.send(req.body);
});

app.listen(PORT, (req, res) => {
    console.log(`Server/Exec: http://localhost:${PORT}`);
});