document.getElementById('loadJoke').addEventListener('click', function() {
    const category = document.getElementById('category').value;
    const url = category ? `https://api.chucknorris.io/jokes/random?category=${category}` : 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('joke').innerText = data.value;
            console.log(data)
        })
        .catch(error => {
            document.getElementById('joke').innerText = 'Si è verificato un errore: ' + error.message;
            console.log(error.message)
        });
});