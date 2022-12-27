const database = require('../database');

/* SELECT * FROM */
database.select().table('games').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

/* SELECT -> seletivo */
database.select(['id', 'preco']).table('games').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
