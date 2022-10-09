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
  Article.findAll({
    order: [['id', 'desc']]
  }).then(articles => {
    Category.findAll().then(categories => {
      res.render("index", { articles, categories });
    })
  })
});

// Rota -> Categorias
app.use('/', categoriesController);

// Rota -> Artigos
app.use('/', articlesController);

// Rota -> Slug/artigo
app.get('/:slug', (req, res) => {
  let slug = req.params.slug;
  Article.findOne({
    where: { slug }
  }).then(article => {
    if (article != undefined) {
      Category.findAll().then(categories => {
        res.render("article", { article, categories });
      })
    } else {
      res.redirect('/');
    }
  }).catch(err => {
    res.redirect('/');
  });
});

// Rota - artigos por categorias
app.get('/category/:slug', (req, res) => {
  let slug = req.params.slug;
  Category.findOne({
    where: { slug },
    include: [{ model: Article }] // join entre tabelas
  }).then(category => {
    if (category != undefined) {
      Category.findAll().then(categories => {
        res.render('index', { articles: category.articles, categories }) // categoria de artigos
      })
    } else {
      res.redirect('/');
    }
  }).catch(err => {
    res.redirect('/');
  });
});

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});