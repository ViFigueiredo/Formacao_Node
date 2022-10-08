// Controller de rotas de artigos

const express = require('express');
const router = express.Router();

// Models
const Category = require('../categories/Category');
const Article = require('../articles/Article');
const sluggify = require('slugify');

// Página Inicial
router.get('/admin/articles', (req, res) => { // listar
    Article.findAll({
        include: [{model: Category}] // inclui o model de categoria - {article.category.title}
    }).then(articles => {
        res.render('admin/articles/index', { articles });
    });
});

// Página de Criação de artigos
router.get('/admin/articles/new', (req, res) => { // listar
    Category.findAll().then(categories => {
        res.render('admin/articles/new', { categories });
    });
});

router.post('/articles/save', (req, res) => { // criar

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

router.post('/articles/delete', (req, res) => { // deletar
    let id = req.body.id;
    if (id != undefined) { // se é válido
        if (!isNaN(id)) { // se é numérico
            Article.destroy({
                where: { id } // possui ID = id
            }).then(() => {
                res.redirect('/admin/articles');
            })
        } else {
            res.redirect('/admin/articles');
        }
    } else {
        res.redirect('/admin/articles')
    }
});

module.exports = router;