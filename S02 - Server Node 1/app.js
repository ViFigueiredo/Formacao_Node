var http = require('http');

// requisicao -> lado cliente
// resposta -> lado servidor
const porta = 3000;
http.createServer((requisicao, resposta) => {
    resposta.end('<h1> Bem-vindo ao meu site! </h1>')
}).listen(porta);
console.log('Meu servidor está rodando...');