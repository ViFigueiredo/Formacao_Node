const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '130.211.226.255',
    port: 3306,
    user: 'root',
    password: 'dev',
    database: 'knex_test',
  },
});

module.exports = knex;
