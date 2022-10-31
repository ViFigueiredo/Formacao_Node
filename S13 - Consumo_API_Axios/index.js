axios.get('http://localhost:3000/games').then(response => {
    var games = response.data;
    var list = document.getElementById('games');

    var item = document.createElement('li');

    // console.log(games.length);
    if (games.length == 0) {
        item.innerHTML = 'Lista de games vazia.';
        list.appendChild(item);
    }

    games.forEach(game => {
        item.setAttribute('data-id', game.id);
        item.setAttribute('data-title', game.title);
        item.setAttribute('data-year', game.year);
        item.setAttribute('data-price', game.price);

        item.innerHTML = game.id + ' - ' + game.title + ' - $' + game.price + " ";

        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Del';
        deleteBtn.addEventListener('click', () => {
            deleteGame(item);
        });

        item.appendChild(deleteBtn);
        list.appendChild(item);
        // console.log(game);
    });
    // console.log(response);
}).catch(error => {
    console.log(error);
});

function deleteGame(ListItem) {
    var id = ListItem.getAttribute('data-id');
    // console.log(id);
    axios.delete('http://localhost:3000/game/' + id).then(response => {
        if (response.status == 200) {
            alert('Game deletado!');
            location.reload();
        }
    }
    ).catch(error => {
        console.log(error);
    });
}

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

    // console.log(game);
}