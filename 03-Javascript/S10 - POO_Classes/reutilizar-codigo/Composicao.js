// MUITO IMPORTANTE -> REFATORAÇÃO DE CÓDIGO

//técnica utilizada para construir uma classe com outras classes, eliminando a necessidadede de repetição de códigos em projetos gramdes

// Exemplos de problemas com reutilização de classes utilizando conposição

// Passo 1 - componentes de classe
class Leitor {
    Ler(caminho){
        return 'Conteúdo do arquivo!'
    }
}

class Escritor {
    Escrever(arquivo,conteudo){
        console.log('Conteúdo escrito.');
    }
}

class CriadorTxt{
    Criar(nome){
        console.log('Arquivo criado!');
    }
}

class CriadorPDF{
    Criar(nome){
        console.log('Arquivo criado!');
    }
}

class Destruidor{
    Deletar(nome){
        console.log('Deletando arquivo!');
    }
}

// Problema 1
class ManipuladorDeArquivo {
    constructor(nome) {
        this.arquivo = nome
        
        // Passo 2 - objetos de classe
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criadorTxt = new CriadorTxt()
        this.destruidor = new Destruidor()
    }

    // LerArquivo() {
    //     console.log('Lendo...');
    // }

    // EscreverArquivo(dados) {
    //     console.log('Escrevendo dados...');
    // }

    // CriarArquivo(nome) {
    //     console.log('Criando arquivo: ' + nome);
    // }

    // DeletarArquivo(nome) {
    //     console.log('Deletando arquivo: ' + nome);
    // }
}


// Passo 3 - uso da composição de classe
var manipulador = new ManipuladorDeArquivo('meuarquivo.txt')

manipulador.leitor.Ler()
manipulador.escritor.Escrever()
manipulador.criadorTxt.Criar()
manipulador.destruidor.Deletar()

// Problema 2
class GerenciadorDeUsuarios{
    constructor(){
        // this.criadorTxt = new CriadorTxt()
        this.criadorPdf = new CriadorPDF()
        this.escritor = new Escritor()
    }

    SalvarListaDeUsuarios(lista) {
        this.criadorTxt.Criar('usuarios.txt')
        this.escritor.Escrever('usuarios.txt', lista)
    }
}

var usuarios = new GerenciadorDeUsuarios()
usuarios.SalvarListaDeUsuarios(['Vinicius', 'Lucas', 'Rafael', 'Davi'])