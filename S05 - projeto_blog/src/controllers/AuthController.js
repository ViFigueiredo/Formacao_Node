
// Express
const express = require('express');
const router = express.Router();

// Hash de senhas
const bcrypt = require('bcryptjs');

// Model User
const User = require('../models/User');

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
                console.log(req.session.user);
                res.redirect('/admin');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    })
});

router.get('/logout', (req, res) => { // logout
    req.session.user = undefined;
    res.redirect('/');
});


module.exports = router;