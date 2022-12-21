// tratamento de dados em forma de tabela

class Table {
    constructor(arr){
        this.header = arr[0]; // cabeçalho
        arr.shift(); // remove cabeçalho do total do array
        this.rows =  arr; // recebe o resto de arr com cabeçalho removido
    }

    get RowCount() { // metodos virtuais -> atributo dinâmico -> precisa retornar algo!
        return this.rows.length; // contagem de linhas
    }

    get ColumnCount() { // metodos virtuais -> atributo dinâmico -> precisa retornar algo!
        return this.header.length; // contagem de colunas
    }
}

module.exports = Table;