const database = require('../database');

/* INSERT */
database.insert({
  nome: 'Ubisoft',
  game_id: 5,
}).table('estudios').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
