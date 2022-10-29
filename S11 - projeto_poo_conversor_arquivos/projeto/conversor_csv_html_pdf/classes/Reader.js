// Leitura do CSV
// retorna um bloco de strings com quebra de linha \r\n

const fs = require('fs');
const util = require('util');

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {

        try {
            return await this.reader(filepath, 'utf-8');
        } catch (error) {
            return undefined;
        }


        // readfile -> função assincrona que não retorna dados (apenas log) em suas callbacks
        // necessário converter callbacks em promisses
        // this.reader(filepath,{encoding: 'utf-8'}, (err, data) => {
        //     if (err) console.log(err);
        //     else console.log(data);
        // })
    }
}

module.exports = Reader;