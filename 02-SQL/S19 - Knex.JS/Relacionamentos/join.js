const database = require('../database');

/* JOIN */

/* exemplo 1 - relacionamento ID */
// database.select().table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   });

/* exemplo 2  - relacionamento NOME */
// database.select(['games.id', 'estudios.id as estudio_id', 'games.nome as game_nome', 'estudios.nome as estudio_nome']).table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   });

/* exemplo 3  - relacionamento NOME = simplificado */
database.select(['games.*', 'estudios.nome as estudio_nome']).table('games').innerJoin('estudios', 'estudios.game_id', 'games.id').then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  });
