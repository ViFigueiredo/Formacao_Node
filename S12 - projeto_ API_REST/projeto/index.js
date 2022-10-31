const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
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
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.get('/game/:id', (req, res) => { // listar

    var id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        var game = DB.games.find(game => game.id == id);

        if (game !== undefined) {
            res.statusCode = 200;
            res.send(game);
        } else {
            res.sendStatus(404);
        }
    }
});

app.post('/game', (req, res) => { // criar

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

app.delete('/game/:id', (req, res) => { // deletar

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

app.put('/game/:id', (req, res) => { // editar

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(game => game.id == id);

        if (game != undefined) {

            var { id, title, price, year } = req.body;

            if (id != undefined) game.id = id;
            if (title != undefined) game.title = title;
            if (price != undefined) game.price = price;
            if (year != undefined) game.year = year;

            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
})