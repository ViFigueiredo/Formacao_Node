const database = require('../database');

/* ORDENAÇÃO */
// crescente - ASC
// decrescente - DESC

database.select().table('games').orderBy('id', 'asc').then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  });

database.select().table('games').orderBy('id', 'desc').then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  });
