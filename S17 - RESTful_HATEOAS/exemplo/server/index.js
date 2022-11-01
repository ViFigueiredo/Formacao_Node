const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

const jwtSecret = 'minha _secret_jwt';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id: 1,
            title: "Call of Duty Warzone",
            year: 2019,
            price: 60
        },
        {
            id: 2,
            title: "ARK Survive Evolved",
            year: 2017,
            price: 80
        },
        {
            id: 3,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
    ],
    users: [
        {
            id: 1,
            name: 'User 01',
            email: 'email1@email.com',
            password: '123'
        },
        {
            id: 2,
            name: 'User 02',
            email: 'email2@email.com',
            password: '456'
        },
    ]
}

// middleware - tudo que é executado entre a requisição e a rota
function middlewareAuth(req, res, next) {
    const authToken = req.headers['authorization'];
    // console.log(authToken);

    if (authToken != undefined) { // se token for vazio

        const bearer = authToken.split(' ');
        // console.log(bearer);
        const token = bearer[1];
        jwt.verify(token, jwtSecret, (err, data) => { // compara o token com a secret
            if (err) {
                res.status(401);
                res.json({ err: 'Token inválido.' });
            } else { // se for válido
                // console.log(data);

                // variavel "req" armazena um obj na requisição
                req.token = token;
                req.loggedUser = { id: data.id, email: data.email };

                next(); // permite a requisição seguir em frente para as rotas...
            }
        });

    } else {
        res.status(200);
        res.json({ err: 'Token inválido.' });
    }
}


app.get('/games', middlewareAuth, (req, res) => {

    // exemplo hateoas - as rotas são genéricas
    var HATEOAS = [
        {
            href: 'http://localhost:123/game/0',
            method: 'DELETE',
            rel: 'delete_game'
        },
        {
            href: 'http://localhost:123/game/0',
            method: 'PUT',
            rel: 'edit_game'
        },
        {
            href: 'http://localhost:123/game/0',
            method: 'GET',
            rel: 'get_game'
        },
        {
            href: 'http://localhost:123/auth',
            method: 'POST',
            rel: 'login'
        },
    ];

    res.statusCode = 200;
    res.json({ games: DB.games, _links: HATEOAS }); // podemos acessar as variaveis do middleware se ele estiver presente
})

app.get('/game/:id', middlewareAuth, (req, res) => { // listar

    var id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.sendStatus(400);
    } else {

        // exemplo hateoas - as rotas são genéricas
        var HATEOAS = [
            {
                href: 'http://localhost:123/game/' + id,
                method: 'DELETE',
                rel: 'delete_game'
            },
            {
                href: 'http://localhost:123/game/' + id,
                method: 'PUT',
                rel: 'edit_game'
            },
            {
                href: 'http://localhost:123/game/' + id,
                method: 'GET',
                rel: 'get_game'
            },
            {
                href: 'http://localhost:123/games',
                method: 'GET',
                rel: 'get_all_games'
            },
        ];

        var game = DB.games.find(game => game.id == id);

        if (game !== undefined) {
            res.statusCode = 200;
            res.json({ game, _links: HATEOAS });
        } else {
            res.sendStatus(404);
        }
    }
});

app.post('/game', middlewareAuth, (req, res) => { // criar

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    var { title, price, year } = req.body;

    var id = getRandomInt(1, 100);

    DB.games.push({ id, title, price, year });
    res.sendStatus(200);
});

app.delete('/game/:id', middlewareAuth, (req, res) => { // deletar

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var gameIndex = DB.games.findIndex(game => game.id == id);

        if (gameIndex == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(gameIndex, 1);
            res.sendStatus(200);
        }
    }
});

app.put('/game/:id', middlewareAuth, (req, res) => { // editar

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        // exemplo hateoas - as rotas são genéricas
        var HATEOAS = [
            {
                href: 'http://localhost:123/game/' + id,
                method: 'DELETE',
                rel: 'delete_game'
            },
            {
                href: 'http://localhost:123/game/' + id,
                method: 'PUT',
                rel: 'edit_game'
            },
            {
                href: 'http://localhost:123/game/' + id,
                method: 'GET',
                rel: 'get_game'
            },
            {
                href: 'http://localhost:123/games',
                method: 'GET',
                rel: 'get_all_games'
            },
        ];


        var game = DB.games.find(game => game.id == id);

        if (game != undefined) {

            var { id, title, price, year } = req.body;

            if (id != undefined) game.id = id;
            if (title != undefined) game.title = title;
            if (price != undefined) game.price = price;
            if (year != undefined) game.year = year;

            res.statusCode = 200;
            res.json({ game, _links: HATEOAS });

        } else {
            res.sendStatus(404);
        }
    }
})

app.post('/auth', (req, res) => {
    var { email, password } = req.body;

    // exemplo de validações
    if (email != undefined) {
        var user = DB.users.find(user => user.email == email);

        if (user != undefined) {

            if (user.password == password) {

                jwt.sign(
                    { // payload
                        id: user.id,
                        email: user.email
                    }, jwtSecret,
                    { // buffer - tempo de validade do token
                        expiresIn: '24h'
                    }, (err, token) => { // callback
                        if (err) {
                            res.status(400);
                            res.json({ err: 'Falha interna.' });
                        } else {
                            res.status(200);
                            res.json({ token: token }); // retorna o token criado
                        }
                    })

            } else {
                res.status(401);
                res.json({ err: 'Token inválido.' })
            }

        } else {
            res.status(404);
            res.json({ err: 'Usuário inválido.' })
        }

    } else {
        res.status(400);
        res.json({ err: 'E-mail inválido.' })
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
})