// Controller de rotas de artigos

const express = require('express');
const router = express.Router();

// Models
const Category = require('../categories/Category');
const Article = require('../articles/Article');
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
        let result = { next, articles };

        Category.findAll().then(categories => {
            res.render('admin/articles/page', { result, categories })
        });

        // res.json(result);
    })
})



module.exports = router;