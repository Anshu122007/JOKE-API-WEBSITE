document.getElementById('jokeButton').addEventListener('click', function() {
    // Get the selected category from the dropdown
    const category = document.getElementById('categorySelect').value;

    // Show loading message while fetching the joke
    document.getElementById('joke').textContent = 'Loading...';

    // Fetch a joke from the selected category
    fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .then(data => {
            // If the joke is returned
            if (data.joke) {
                document.getElementById('joke').textContent = data.joke;
            } else {
                // If it's a two-part joke
                document.getElementById('joke').textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // If there's an error, display a message
            document.getElementById('joke').textContent = 'Oops! Something went wrong. Try again later.';
        });
});
