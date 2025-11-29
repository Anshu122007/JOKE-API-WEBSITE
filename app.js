// Function to fetch jokes from the selected category
function fetchJoke(category) {
    return fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching joke:', error);
            throw error; // Throw error to be caught later
        });
}

// Event listener for the "Get Joke" button
document.getElementById('jokeButton').addEventListener('click', function() {
    const category = document.getElementById('categorySelect').value; // Get selected category

    // Show loading message while fetching the joke
    document.getElementById('joke').textContent = 'Loading...';

    // Fetch the joke and handle response
    fetchJoke(category)
        .then(data => {
            if (data.joke) {
                document.getElementById('joke').textContent = data.joke;
            } else {
                document.getElementById('joke').textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(() => {
            // If an error occurs, show a fallback message
            document.getElementById('joke').textContent = 'Oops! Something went wrong. Try again later.';
        });
});
