// Controller de rotas de categorias

// Express
const express = require('express');
const router = express.Router();

// converte "título do site" em "titulo-do-site" sem acentuação
const slugify = require('slugify');

// Model
const Category = require('./Category');

// Página inicial - Cria nova categoria
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/category/new');
});

// Envio de formulário - Cria nova categoria
router.post('/categories/save', (req, res) => {
    var title = req.body.title;

    if(title != undefined){

        Category.create({
            title: title,
            slug: slugify(title) 
        }).then(() => {
            res.redirect('/');
        });

    } else {
        res.redirect('/admin/categories/new');
    }
});

module.exports = router;