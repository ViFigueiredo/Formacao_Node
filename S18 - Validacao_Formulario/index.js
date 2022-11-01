const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('express-flash');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(flash());

app.get('/', (req, res) => {
    console.log('Exec...');
    res.send('Executando...');
});

app.listen(PORT, (req, res) => {
    console.log(`Server/Exec: http://localhost:${PORT}`);
});