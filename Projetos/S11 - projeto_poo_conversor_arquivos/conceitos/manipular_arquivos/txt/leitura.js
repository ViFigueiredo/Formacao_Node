// npm i fs
// node leitura.js

const fs = require("fs") // file-system

fs.readFile("./arquivo.exemplo", { encoding: 'utf-8'}, (erro, dados) => {

    //possiveis erros:
    //badblock
    //já está sendo utilizado
    // arquivo particionado

    if (erro) {
        console.log('Ocorreu uma falha durante leitura do arquivo.');
    } else {
        console.log(dados);
    }
})