axios.get('http://localhost:3000/games').then(response => {
    var games = response.data;
    var list = document.getElementById('games');

    games.forEach(game => {
        var item = document.createElement('li');
        item.innerHTML = game.id + ' - ' + game.title + ' - $' + game.price;
        list.appendChild(item);
        console.log(game);
    });
    console.log(response);
}).catch(error => {
    console.log(error);
});