require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');

const app = express();
const PORT = process.env.PORT;
const recaptcha = process.env.RECAPTCHA_KEY;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('any_string'));
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1h
}));
app.use(flash());

app.get('/', (req, res) => {

    let emailError = req.flash('emailError');
    let nomeError = req.flash('nomeError');
    let pontosError = req.flash('pontosError');

    let email = req.flash('email');
    let nome = req.flash('nome');
    let pontos = req.flash('pontos');

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;

    email = (email == undefined || email.length == 0) ? undefined : email;
    nome = (nome == undefined || nome.length == 0) ? undefined : nome;
    pontos = (pontos == undefined || pontos.length == 0) ? undefined : pontos;

    // console.log('Exec...');
    // res.send('Executando...');
    res.render('index', {
        emailError, nomeError, pontosError,
        email: email,
        nome: nome,
        pontos: pontos,
        recaptcha
    });
});

app.post('/form', (req, res) => {
    let { email, nome, pontos } = req.body;

    let emailError;
    let pontosError;
    let nomeError;

    if (email == undefined || email == '') {
        emailError = 'E-mail vazio!'
        // console.log(emailError);
    }

    if (pontos == undefined || pontos < 20) {
        pontosError = 'Pontos < 20!'
        // console.log(pontosError);
    }

    if (nome == undefined || nome == '') {
        nomeError = 'Nome vazio!'
        // console.log(nomeError);
    }

    if (nome.length < 3) {
        nomeError = 'Nome muito pequeno!'
        // console.log(nomeError);
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {

        req.flash('emailError', emailError);
        req.flash('nomeError', nomeError);
        req.flash('pontosError', pontosError);

        req.flash("email", email);
        req.flash("nome", nome);
        req.flash("pontos", pontos);

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