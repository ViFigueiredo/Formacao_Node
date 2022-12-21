// Sistema de cassino
// Vários tipos de dados
// Rolar o dado

class Dado {

    static rolarDado(qtdDados, numFaces) {

        console.log('Qtd de dados: ' + qtdDados);

        let i = 1
        while (qtdDados > 0) {
            // retorna um numero de 1 a numFaces
            console.log(`Resultado do dado ${i}: ${Math.floor(Math.random() * (numFaces) + 1)}`)
            qtdDados--
            i++
        }
    }
}

Dado.rolarDado(3, 5)