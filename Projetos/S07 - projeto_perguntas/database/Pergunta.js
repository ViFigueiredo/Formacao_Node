const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Verifica se a tabela já existe e caso positivo, impede a sobreescrição
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;