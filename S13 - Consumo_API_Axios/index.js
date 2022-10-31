axios.get('http://localhost:3000/games').then(response => {
    var games = response.data;
    var list = document.getElementById('games');

    games.forEach(game => {
        var item = document.createElement('li');

        item.setAttribute('data-id', game.id);
        item.setAttribute('data-title', game.title);
        item.setAttribute('data-year', game.year);
        item.setAttribute('data-price', game.price);

        item.innerHTML = game.id + ' - ' + game.title + ' - $' + game.price;
        list.appendChild(item);
        console.log(game);
    });
    console.log(response);
}).catch(error => {
    console.log(error);
});

function createGame() {
    var titleInput = document.getElementById('title');
    var yearInput = document.getElementById('year');
    var priceInput = document.getElementById('price');

    var game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    axios.post('http://localhost:3000/game', game).then(response => {
        if (response.status == 200) {
            alert('Game cadastrado!');
            location.reload();
        }
    }).catch(error => {
        console.log(error);
    });

    console.log(game);
}