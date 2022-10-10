
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

module.exports = router;