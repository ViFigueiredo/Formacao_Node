// npm i fs
// node escrita.js

const fs = require("fs") // file-system

fs.writeFile("./arquivo.exemplo", "Novo conteúdo do arquivo 2", (erro) => {

    //possiveis erros:
    //badblock
    //já está sendo utilizado
    // arquivo particionado

    if (erro) console.log('Ocorreu uma falha durante escrita do arquivo.');
})