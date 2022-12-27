const database = require('../database');

/* QUERY CRUA - maior flexibilidade */
database.raw('SELECT * FROM games').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
