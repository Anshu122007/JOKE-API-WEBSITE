// Cache DOM elements for performance
const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');
const categorySelect = document.getElementById('categorySelect');

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
jokeButton.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category

    // Show loading message while fetching the joke
    jokeElement.textContent = 'Loading...';

    // Fetch the joke and handle response
    fetchJoke(category)
        .then(data => {
            if (data.joke) {
                jokeElement.textContent = data.joke;
            } else {
                jokeElement.textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(() => {
            // If an error occurs, show a fallback message
            jokeElement.textContent = 'Oops! Something went wrong. Try again later.';
        });
});
