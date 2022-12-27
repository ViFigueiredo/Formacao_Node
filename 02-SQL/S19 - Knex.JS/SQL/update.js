const database = require('../database');

/* UPDATE */
// sempre respeitar o tipo de dado e verificar se não é undefined <-> erro
database.where({ id: 5 }).update({ preco: 40 }).table('games').then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  });
