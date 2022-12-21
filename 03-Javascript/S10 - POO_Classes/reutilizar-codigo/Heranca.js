// Herança -> basicamente temos uma classe mãe e classes filhas que se utilizam de métodos e objetos da classe mãe

// É uma técnico pouco utilizavel em reaproveitamento de código já que não possui resultados melhores que a composição

// Ex1 - Animais/Petshop
class Animal { // classe mãe

    constructor(nome, idade, preco) {
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }

    ChecharEstoque() {
        return 10
    }

    MetodoQualquer(){
        console.log('Esse método faz parte da classe mãe.');
    }
}

class Cachorro extends Animal { // classe filha
    
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco) // herda o construtor da classe mãe
        this.raca = raca
        this.peso = peso
    }

    Latir() {
        console.log('ROLF! ROLF!');
    }

    ChecharEstoque() { // este método pode ser sobrescrito com escopo somente para cachorro
        console.log('Temos 20 dogões na loja.');
    }

    MetodoQualquer(){
        console.log('Aqui é uma classe de dogs!');
        super.MetodoQualquer() // executa tudo referente ao metodo da classe mãe antes de ser sobrescrita no escopo atual
        console.log('Aqui tem nova funcionalidade.');
    }
}

class Pato extends Animal { // classe filha

}

var dog = new Cachorro('Dogão', 9, 300, 'Pitbull', 30)
dog.ChecharEstoque()
dog.Latir()
dog.MetodoQualquer()
console.log(dog.raca);

// var duck = new Pato('Chuck', 12, 500)
// console.log(duck.ChecharEstoque());

// Herança em múltiplos niveis
// Não utilizar!!!
// Arquitetura desorganizada
class PastorAlemao extends Animal{}
class PastorAlemaoMacho extends PastorAlemao{}