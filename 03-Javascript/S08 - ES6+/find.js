var victor = {
    nome: 'Victor Lima',
    empresa: 'Guia do Programador',
    salario: 1000,
} // verificar(); -> false

var david = {
    nome: 'David',
    empresa: 'Umbler',
    salario: 800,
} // verificar(); -> false

var erik = {
    nome: 'Erik Fig',
    empresa: 'Udemy',
    salario: 500,
} // verificar(); -> false

var users = [victor, david, erik];

var usuario = users.find(user => user.salario < 1000 && user.salario > 500);  // verificar();

console.log(usuario);