// Express
const express = require('express');
const app = express();

// Controlles
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// View Engine
app.set('view engine', 'ejs');

// Arquivos Estáticos
app.use(express.static('public'));

// Formulários
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
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
  Article.findAll().then(articles => {
    res.render("index", { articles });
  })
});

// Rota -> Categorias
app.use('/', categoriesController);

// Rota -> Artigos
app.use('/', articlesController);

// Rota -> Slug/artigo
app.use('/:slug', (req, res) => {
  let slug = req.params.slug;
  Article.findOne({
    where: { slug }
  }).then(article => {
    (article != undefined) ? res.render('') : res.redirect('/')
    .catch(err => {
      res.redirect('/');
    });
  });
});

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});