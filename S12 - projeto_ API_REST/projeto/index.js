const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id: 01,
            title: "Call of Duty Warzone",
            year: 2019,
            price: 60
        },
        {
            id: 02,
            title: "ARK Survive Evolved",
            year: 2017,
            price: 80
        },
        {
            id: 03,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
    ]
}

app.get('/', () => {

})

const port = 3000;
app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
})