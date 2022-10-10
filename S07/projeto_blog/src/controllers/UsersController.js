
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

router.get('/login', (req, res) => { // página de login
    res.render('admin/users/login');
});

router.post('/auth', (req, res) => { // página de login - envio de formulario
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ where: { email } }).then(user => {
        if (user != undefined) { // se existir usuario com este email

            // faz o hash da senha inserida em login e compara com a hash do banco
            let correct = bcrypt.compareSync(password, user.password);

            if (correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.json(req.session.user);
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    })
});

module.exports = router;