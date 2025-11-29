// Import the fetch functions from api.js
import { fetchSingleJoke, fetchTwoPartJoke } from './api.js';

// Cache DOM elements for performance
const jokeButton = document.getElementById('jokeButton');
const jokeElement = document.getElementById('joke');
const categorySelect = document.getElementById('categorySelect');

// Function to handle fetching and displaying jokes
function displayJoke(category) {
    jokeElement.textContent = 'Loading...'; // Show loading message while fetching

    // Fetch the joke from the selected category
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
                jokeElement.textContent = 'No joke found. Try again later.';
            }
        })
        .catch(() => {
            // If there's an error, show a fallback message
            jokeElement.textContent = 'Oops! Something went wrong. Please try again later.';
        });
}

// Event listener for the "Get Joke" button
jokeButton.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category
    displayJoke(category);
});

// Event listener for clicking the joke itself to fetch a new one
jokeElement.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category
    displayJoke(category); // Fetch and display a new joke when the current one is clicked
});
