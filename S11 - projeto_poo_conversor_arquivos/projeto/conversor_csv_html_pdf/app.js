/* Módulos

template engine -> npm i ejs --save

*/

var Reader = require('./classes/Reader')
var Writer = require('./classes/Writer')
var Processor = require('./classes/Processor')
var HtmlParser = require('./classes/HtmlParser');
var Table = require('./classes/Table');
var pdfWriter = require('./classes/pdfWriter');

var leitor = new Reader();
var escritor = new Writer();

async function main(params) {
    var dados = await leitor.Read('./example.csv')
    // console.log(dados);

    var dadosProcessados = Processor.Process(dados); // array de dados

    var pessoas = new Table(dadosProcessados); // modela a estrutura do array em tabela

    pessoas.rows.push(['Henrique', 'Android', 'SmartIA', 'Gadget']) // adiciona conteudo em uma linha

    var html = await HtmlParser.Parse(pessoas); // converte os dados em html

    escritor.Write(Date.now() + '.html', html);
    pdfWriter.WritePDF(Date.now() + '.pdf', html);

    // console.log(pessoas.header);
    // console.log(pessoas.rows);
    // console.log(pessoas.RowCount);
    // console.log(pessoas.ColumnCount);
    // console.log(html);
}

main();