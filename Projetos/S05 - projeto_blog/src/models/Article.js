// Model de artigos

const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = require('./Category');

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    },
});

// Relacionamentos -> poderia ser apenas um, mas utilizamos uma via de mão dupla
Category.hasMany(Article); // uma categoria possui muitos artigos -> relacionamento 1:N
Article.belongsTo(Category); // um artigo pertence a uma categoria -> relacionamento 1:1

// Article.sync({force: true}); // toda vez que aplicação iniciar, criamos a tabela ou atualizamos caso já exista

module.exports = Article;