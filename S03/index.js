const express = require('express'); // importando express
const app = express(); // inicializando express

// qual url e qual a rota
// rota raiz
// uma resposta (obrigatoria) por rota
app.get('/', (req, res) => {
    res.send('Bem-vindo a página inicial.')
})

app.get('/blog', (req, res) => {
    res.send('Bem-vindo ao blog: www.guiadoprogramador.com.br')
})

app.get('/canal/youtube', (req, res) => {
    res.send('Bem-vindo ao meu canal do youtube.')
})

const porta = 4000;
app.listen(porta,(erro) => {
    if(erro) console.log('Ocorreu um erro.');
    console.log('Servidor iniciado com sucesso.'); // Cannot GET /
})


