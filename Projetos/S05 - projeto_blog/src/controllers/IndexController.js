// Express
const express = require('express');
const router = express.Router();

// Models
const Category = require('../models/Category');
const Article = require('../models/Article');

// Middlewares
const adminAuth = require('../middlewares/auth');

router.get('/', (req, res) => { // Rota - Página Inicial
    Article.findAll({
        order: [['id', 'desc']],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index.ejs", { articles, categories });
        });
    })
});

router.get('/admin', adminAuth,  (req, res) => { // Rota - Página Admin
    res.render('admin/index');
});

router.get('/category/:slug', (req, res) => { // Rota - Artigos por categorias
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

// Paginação
router.get('/articles/page/:num', (req, res) => {
    let page = req.params.num;

    var qtdArtigos = 2; // qtd de artigos por pagina

    if (isNaN(page) || page == 1) { // params.num for numero ou 1
        var offset = 0; // 0 ~ 1
    } else {
        offset = (parseInt(page) - 1) * qtdArtigos;
    }

    Article.findAndCountAll({ // retorna todos os artigos e a contagem total (count/rows)
        limit: qtdArtigos, // limita a quantidade total de artigos
        offset: offset, // retorna os proximos valores baseado no delimitador de artigos (qtdArtigos)
        order: [['id', 'DESC']]
    }).then(articles => {

        var next;
        (offset + qtdArtigos >= articles.count) ? next = false : next = true; // se a soma de offset + qtd de artigos por pagina for maior que a quantidade total
        let result = { page: parseInt(page), next, articles };

        Category.findAll().then(categories => {
            res.render('admin/articles/page', { result, categories })
        });

        // res.json(result);
    });
});

module.exports = router;
