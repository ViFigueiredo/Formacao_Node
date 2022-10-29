const express = require('express'); // importando express
const app = express(); // inicializando express

// qual url e qual a rota
// rota raiz
// uma resposta (obrigatoria) por rota
app.get('/', (req, res) => {
    res.send('Bem-vindo a página inicial.');
});

app.get('/blog', (req, res) => {
    res.send('Bem-vindo ao blog: www.guiadoprogramador.com.br');
});

app.get('/canal/youtube', (req, res) => {
    res.send('Bem-vindo ao meu canal do youtube.');
});

// rota com parâmetro
// parametro é obrigatório para funcionamento da rota
// para tonar o parâmetro não obrigatório,basta adicionar "?" -> :params?
app.get('/parametro/:funcionario/:empresa?', (req, res) => {
    const funcionario = req.params.funcionario;
    const empresa = req.params.empresa;

    if (empresa) {
        res.send(`
        Rota com parâmetro: </br>
        Nome do funcionário: ${funcionario} </br>
        Empresa atual: ${empresa}
        `);
    } else {
        res.send(`
        Rota com parâmetro: </br>
        Nome do funcionário: ${funcionario} </br>
        `);
    }
});

// query params -> parametros opcionais dinâmicos
// http://localhost:4000/estudando?curso=nodejs
app.get('/estudando', (req, res) => {
    var params = req.query["curso"];
    (params) ? res.send(`Curso: ${params}`) : res.send('Não há programação de estudos.');
});

// Configuração do servidor
const porta = 4000;
app.listen(porta, (erro) => {
    if (erro) console.log('Ocorreu um erro.');
    console.log('Servidor iniciado com sucesso.'); // Cannot GET /
});


