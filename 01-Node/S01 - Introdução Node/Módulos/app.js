var calculadora = require('./calculadora');

const n1 = 10;
const n2 = 20;
console.log(`Soma de ${n1} e ${n2} = ${calculadora.soma(n1,n2)}`);
console.log(`Subtração de ${n1} e ${n2} = ${calculadora.sub(n1,n2)}`);
console.log(`Multiplicação de ${n1} e ${n2} = ${calculadora.mult(n1,n2)}`);
console.log(`Divisão de ${n1} e ${n2} = ${calculadora.div(n1,n2)}`);