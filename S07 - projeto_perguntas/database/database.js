const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'dev', {
    host: '130.211.226.255',
    dialect: 'mysql'
});

module.exports = connection;