var axiosConfig = {
    headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbWFpbDFAZW1haWwuY29tIiwiaWF0IjoxNjY3MjM0ODU4LCJleHAiOjE2NjczMjEyNTh9.qw7PAyp639JCjuvSlTqysxjAOOCGVG3R245FcOHs__s'
    }
}

function login(params) {
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('password');

    var email = emailField.value;
    var password = passwordField.value;

    axios.post('http://localhost:3000/auth',{
        email,
        password
    }).then(res => {
        alert('Logado com sucesso!');
        var token = res.data.token;
        console.log(res.data);
    }).catch(err => {
        alert('Login inválido!');
        console.log(err);
    });
}

axios.get('http://localhost:3000/games', axiosConfig).then(response => {
    var games = response.data;
    var list = document.getElementById('games');

    // console.log(games.length);
    if (games.length == 0) {
        item.innerHTML = 'Lista de games vazia.';
        list.appendChild(item);
    }

    games.forEach(game => {
        var item = document.createElement('li');

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

        var editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', () => {
            loadForm(item);
        });

        item.appendChild(deleteBtn);
        item.appendChild(editBtn);
        list.appendChild(item);
        // console.log(game);
    });
    // console.log(response);
}).catch(error => {
    console.log(error);
});

function loadForm(itemForm) {
    // console.log(game);

    var id = itemForm.getAttribute('data-id');
    var title = itemForm.getAttribute('data-title');
    var year = itemForm.getAttribute('data-year');
    var price = itemForm.getAttribute('data-price');

    document.getElementById('idEdit').value = id;
    document.getElementById('titleEdit').value = title;
    document.getElementById('yearEdit').value = year;
    document.getElementById('priceEdit').value = price;
}

function editGame() {
    var idInput = document.getElementById('idEdit');
    var titleInput = document.getElementById('titleEdit');
    var yearInput = document.getElementById('yearEdit');
    var priceInput = document.getElementById('priceEdit');

    var game = {
        id: idInput.value,
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    var id = idInput.value;

    axios.put('http://localhost:3000/game/' + id, game).then(response => {
        if (response.status == 200) {
            alert('Game atualizado!');
            location.reload();
        }
    }).catch(error => {
        console.log(error);
    });
}

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