// Express
const express = require('express');
const router = express.Router();

// Models
const Category = require('../models/Category');
const Article = require('../models/Article');

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

router.get('/admin', (req, res) => { // Rota - Página Admin
    res.render('admin/index');
});

module.exports = router;
