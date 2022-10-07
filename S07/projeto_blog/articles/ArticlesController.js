// Controller de rotas de artigos

const express = require('express');
const router = express.Router();

const Category = require('../categories/Category');
const Article = require('../articles/Article');
const sluggify = require('slugify');

router.get('/admin/articles', (req, res) => {
    res.send('ROTA DE ARTIGOS');
});

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', { categories });
    });
});

router.post('/articles/save', (req, res) => {

    // capturando dados de formulário
    let title = req.body.title;
    let body = req.body.body;
    let categoryId = req.body.category;

    // adicionando dados ao model/db
    Article.create({
        title,
        slug: sluggify(title),
        body,
        categoryId // chave estrangeira
    }).then(() => {
        res.redirect('/admin/articles')
    })
});

module.exports = router;