// Import the fetchJoke function from api.js
import { fetchJoke } from './api.js';

// Cache DOM elements for performance
const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');
const categorySelect = document.getElementById('categorySelect');

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
