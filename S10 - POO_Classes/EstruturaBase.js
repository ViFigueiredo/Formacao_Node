class Filme {

    // atributos
    constructor(titulo, ano, genero, diretor, duracao) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.diretor = diretor
        this.duracao = duracao
        this.atores = []
    }

    // métodos
    Reproduzir() {
        console.log('Reproduzindo...');
    }

    Pausar() {
        console.log('Pausado ||');
    }

    Avançar() {
        console.log('Avançar >>');
    }

    Fechar() {
        console.log('Fechar X');
    }

    ficha() {
        console.log('Titulo: ' + this.titulo);
        console.log('Ano de lançamento: ' + this.ano);
        console.log('Gênero: ' + this.genero);
        this.Reproduzir();
        this.Avançar();
    }

}

let vingadores = new Filme('Vingadores 2', 2000, 'Ação', 'Alguém', '2h');
// vingadores.titulo = 'Vingadores 2';
// vingadores.ano = 2014;

// console.log(vingadores.titulo);
// console.log(vingadores.ano);

// console.log(vingadores);
console.log(vingadores.ficha());

console.log(""); // somente para espaçar no console

let batman = new Filme('Cavaleiro das trevas', 2012, 'Ação', 'Alguém', '3h');
// batman.titulo = 'Cavaleiro das Trevas';
// batman.genero = 'Ação';

// console.log(batman.titulo);
// console.log(batman.genero);

// console.log(batman);
console.log(batman.ficha());