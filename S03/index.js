const express = require('express'); // importando express
const app = express(); // inicializando express

const porta = 4000;
app.listen(porta,(erro) => {
    if(erro) console.log('Ocorreu um erro.');
    console.log('Servidor iniciado com sucesso.'); // Cannot GET /
})


