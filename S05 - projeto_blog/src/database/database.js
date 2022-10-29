const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'dev', {
    host: '130.211.226.255',
    dialect: 'mysql',
    timezoe: '-03:00'
});

module.exports = connection;

