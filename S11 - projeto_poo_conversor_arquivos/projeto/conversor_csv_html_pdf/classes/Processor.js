// processa os dados e separa cada linha em um array

class Processor {
    static Process(data){
        var a = data.split('\r\n') // remover caracteres invisiveis de quebra de linha
        // console.log(a);

        var rows = [];

        a.forEach(row => {
            var arr = row.split(',');
            rows.push(arr);
        });

        // console.log(rows);
        return rows;
    }
}

module.exports = Processor;