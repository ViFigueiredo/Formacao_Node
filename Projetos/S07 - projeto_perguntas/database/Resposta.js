const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    perguntaId: { // relacionamento entre resposta e pergunta
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

// Verifica se a tabela já existe e caso positivo, impede a sobreescrição
Resposta.sync({force: false}).then(() => {});

module.exports = Resposta;