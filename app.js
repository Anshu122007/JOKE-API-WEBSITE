document.getElementById('jokeButton').addEventListener('click', function() {
    // Get the selected category from the dropdown
    const category = document.getElementById('categorySelect').value;

    // Fetch a joke from the selected category
    fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .then(data => {
            // Display the joke or a setup and delivery if it's a two-part joke
            if (data.joke) {
                document.getElementById('joke').textContent = data.joke;
            } else {
                document.getElementById('joke').textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => console.error('Error:', error)); // Log any errors
});
