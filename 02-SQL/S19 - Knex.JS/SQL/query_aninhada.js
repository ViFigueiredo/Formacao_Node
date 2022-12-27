const database = require('../database');

/* CONSULTA ANINHADA */
database.insert({ nome: 'Mist of Noyah', preco: 25.70 }).into('games').then(() => {
  database.select(['id', 'preco']).table('games').then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});
