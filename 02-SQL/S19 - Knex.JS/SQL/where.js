const database = require('../database');

/* SELECT + TIPOS DE WHERE */
database
  .select()
  // .where({ nome: 'Tibia' }) where
  // .orWhere({ id: 2 }) // ou
  .whereRaw('nome = "Tibia" OR preco > 55') // like, !=, <, > left...
  .table('games')
  .then((data) => { // promisse
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
