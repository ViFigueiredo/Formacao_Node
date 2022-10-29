// Controller de rotas de categorias

// Express
const express = require('express');
const router = express.Router();

// converte "título do site" em "titulo-do-site" sem acentuação
const slugify = require('slugify');

// Model de categorias
const Category = require('../models/Category');
const Article = require('../models/Article');

// Página inicial - Cria nova categoria
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

// Envio de formulário - Cria nova categoria
router.post('/categories/save', (req, res) => {
    var title = req.body.title;

    if (title != undefined) {

        Category.create({
            title: title,
            slug: slugify(title, { lower: true })
        }).then(() => {
            res.redirect('/admin/categories');
        });

    } else {
        res.redirect('/admin/categories/new');
    }
});

// Página de listagem das categorias
router.get('/admin/categories', (req, res) => { // listar
    Category.findAll().then(categories => {
        res.render('admin/categories/index', { categories });
    });
});

router.post('/categories/delete', (req, res) => { // deletar
    let id = req.body.id;
    if (id != undefined) { // se é válido
        if (!isNaN(id)) { // se é numérico
            Category.destroy({
                where: { id } // possui ID = id
            }).then(() => {
                res.redirect('/admin/categories');
            })
        } else {
            res.redirect('/admin/categories');
        }
    } else {
        res.redirect('/admin/categories');
    }
});

router.get('/admin/categories/edit/:id', (req, res) => { // editar
    let id = req.params.id;

    if (isNaN(id)) return res.redirect('/admin/categories');

    Category.findByPk(id).then(category => {
        if (category != undefined) { // se é válido
            res.render('admin/categories/edit', { category })
        } else {
            res.redirect('/admin/categories');
        }
    }).catch(err => {
        res.redirect('/admin/categories');
    })
});

router.post('/categories/update', (req, res) => { // atualizar
    let id = req.body.id;
    let title = req.body.title;

    Category.update({ title, slug: slugify(title, { lower: true }) }, {
        where: { id }
    }).then(() => {
        res.redirect('/admin/categories');
    })
});

module.exports = router;

