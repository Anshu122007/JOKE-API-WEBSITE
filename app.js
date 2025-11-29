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
            } else {
                // If no joke is returned
                jokeElement.textContent = 'No joke found. Please try again later.';
            }
        })
        .catch((error) => {
            // If there's a network or API issue, show a specific error message
            console.error('Error fetching joke:', error);
            jokeElement.textContent = 'Sorry, there was an error fetching the joke. Please check your connection and try again.';
        });
});
