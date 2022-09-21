const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // informa qual o template engine a ser utilizado (pasta views por padrão)
app.use(express.static('public')); // arquivos estáticos que não de responsabilidade do backend

// Rota -> Página Inicial
// views/index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

// Config server
const porta = 8080;
app.listen(porta, () => {
    console.log(`App executando na porta: http://localhost:${porta}.`);
});
