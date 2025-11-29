document.getElementById('jokeButton').addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            if (data.joke) {
                document.getElementById('joke').textContent = data.joke;
            } else {
                document.getElementById('joke').textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => console.error('Error:', error));
});
