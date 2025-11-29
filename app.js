// Import the fetch functions from api.js
import { fetchSingleJoke, fetchTwoPartJoke } from './api.js';

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
    fetchSingleJoke(category) // You could also use fetchTwoPartJoke(category) here
        .then(data => {
            // If the joke is a single line
            if (data.joke) {
                jokeElement.textContent = data.joke;
            }
            // If the joke has a setup and delivery
            else if (data.setup && data.delivery) {
                jokeElement.textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(() => {
            // If an error occurs, show a fallback error message
            jokeElement.textContent = 'Oops! Something went wrong. Please try again later.';
        });
});
