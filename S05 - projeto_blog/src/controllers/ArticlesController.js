// Controller de rotas de artigos

const express = require('express');
const router = express.Router();

// Models
const Category = require('../models/Category');
const Article = require('../models/Article');
const slugify = require('slugify');

// Página Inicial
router.get('/admin/articles', (req, res) => { // listar
    Article.findAll({
        include: [{ model: Category }] // inclui o model de categoria - {article.category.title}
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

router.get('/admin/articles/edit/:id', (req, res) => { // editar
    let id = req.params.id;

    Article.findByPk(id).then(article => {
        if (article != undefined) { // se é válido
            Category.findAll().then(categories => { // pesquisa todas as categorias
                res.render('admin/articles/edit', { article, categories })
            })
        } else {
            res.redirect('/admin/articles');
        }
    }).catch(err => {
        res.redirect('/admin/articles');
    })
});

router.post('/articles/update', (req, res) => { // atualizar
    // capturando dados de formulário
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    // console.log(id);
    // console.log(title);
    // console.log(body);
    // console.log(categoryId);

    Article.update({ title, slug: slugify(title, { lower: true }), body, category }, {
        where: { id }
    }).then(() => {
        res.redirect('/admin/articles');
    }).catch(err => {
        res.redirect('/');
    });
});

router.get('/:slug', (req, res) => { // Rota - Slug/artigo
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

module.exports = router;