// Express
const express = require('express');
const app = express();

// View Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Arquivos Estáticos
app.use(express.static('public'));

// Formulários
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Banco de Dados
const connection = require('./src/database/database');
connection.authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  }).catch((error) => {
    console.log(error);
  });

// Controllers
const indexController = require('./src/controllers/IndexController');
const categoriesController = require('./src/controllers/CategoriesController');
const articlesController = require('./src/controllers/ArticlesController');
const usersController = require('./src/controllers/UsersController');

// Rotas
app.use('/', indexController); // Rota -> Index
app.use('/', categoriesController); // Rota -> Categorias
app.use('/', articlesController);// Rota -> Artigos
app.use('/', usersController);// Rota -> Usuários

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});