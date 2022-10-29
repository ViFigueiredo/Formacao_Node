function adminAuth(req, res, next) {
    if (req.session.user != undefined) { // se estiver logado - existe sessão
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = adminAuth;