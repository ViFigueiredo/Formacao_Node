// Model de categorias

const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Category.sync({force: true}); // toda vez que aplicação iniciar, criamos a tabela ou atualizamos caso já exista

module.exports = Category;