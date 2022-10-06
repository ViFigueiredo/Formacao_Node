// Express
const express = require('express');
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Arquivos Estáticos
app.use(express.static('public'));

// Formulários
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Banco de Dados
const connection = require('./database/database');
connection.authenticate()
          .then(() => {
            console.log('Conexão feita com sucesso!');
          }).catch((error) => {
            console.log(error);
          });

// Models
const Category = require('./categories/Category');
const Article = require('./articles/Article');

// Rota Inicial
app.get('/', (req, res) => {
    res.render("index");
});

// Rota -> Categorias
const categoriesController = require('./categories/CategoriesController');
app.use('/', categoriesController);

// Rota -> Artigos
const articlesController = require('./articles/ArticlesController');
app.use('/', articlesController);

// Server
const port = 8080;
app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
});