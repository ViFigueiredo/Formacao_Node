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

// Sessões
const session = require('express-session');
app.use(session({
  secret: 'QualquerCoisaAleatória',
  cookie: {
    maxAge: 30000
  },
  resave: true,
  saveUninitialized: true
}));

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
const AuthController = require('./src/controllers/AuthController');
const usersController = require('./src/controllers/UsersController');
const categoriesController = require('./src/controllers/CategoriesController');
const articlesController = require('./src/controllers/ArticlesController');

// Middlewares
const adminAuth = require('./src/middlewares/auth');

// Rotas
app.use('/', indexController); // Rota -> Index
app.use('/', AuthController); // Rota -> Login/Logout
app.use('/', adminAuth, usersController);// Rota -> Usuários
app.use('/', adminAuth, categoriesController); // Rota -> Categorias
app.use('/', adminAuth, articlesController);// Rota -> Artigos

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});