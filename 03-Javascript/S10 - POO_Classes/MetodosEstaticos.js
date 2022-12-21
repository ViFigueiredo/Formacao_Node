class Calculadora {

    static Somar(a, b) {
        console.log(a + b);
    }

    static Sub(a, b) {
        console.log(a - b);
    }
}

// Não precisamos criar os métodos da classe para estáticos
// var calc = new Calculadora();

Calculadora.Somar(10, 20)
Calculadora.Sub(20, 40)
