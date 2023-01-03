const database = require('../database');

/* JOIN - WHERE */

database
  .select(['games.*', 'estudios.nome as estudio_nome'])
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .where('games.id', 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
