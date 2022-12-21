
// Express
const express = require('express');
const router = express.Router();

// Hash de senhas
const bcrypt = require('bcryptjs');

// Model User
const User = require('../models/User');

// Usuários
router.get('/admin/users', (req, res) => { // listar
    User.findAll().then(users => {
        res.render('admin/users/index', { users });
    });
});

router.get('/admin/users/create', (req, res) => { // criar - pagina
    res.render('admin/users/create');
});

router.post('/users/create', (req, res) => { // criar - envio de formulário
    let email = req.body.email;
    let password = req.body.password;

    // Verificando se email é único
    User.findOne({ where: { email } }).then((user) => {
        if (user == undefined) {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);

            User.create({
                email, password: hash
            }).then(() => {
                res.redirect('/');
            }).catch((err) => {
                res.redirect('/');
            });
        } else {
            res.redirect('/admin/users/create');
        }
    })
});

router.get('/admin/users/edit/:id', (req, res) => { // editar
    let id = req.params.id;

    if (isNaN(id)) return res.redirect('/admin/users');

    User.findByPk(id).then(user => {
        if (user != undefined) { // se é válido
            res.render('admin/users/edit', { user })
        } else {
            res.redirect('/admin/users');
        }
    }).catch(err => {
        res.redirect('/admin/users');
    })
});

router.post('/users/update', (req, res) => { // atualizar
    let id = req.body.id;
    let email = req.body.email;

    User.update({ email }, {
        where: { id }
    }).then(() => {
        res.redirect('/admin/users');
    })
});


module.exports = router;