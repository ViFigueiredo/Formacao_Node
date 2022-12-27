const database = require('../database');

const dados = [
  {
    nome: 'Tibia',
    preco: 0.99,
  },
  {
    nome: 'World of Warcraft',
    preco: 55.55,
  },
  {
    nome: 'Guild Wars 2',
    preco: 158.40,
  },
];

/* JS -> SQL */
const query = database.insert(dados).into('games');
console.log(query.toQuery());

/* INSERT */
database.insert(dados).into('games').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
