// Import the fetch functions from api.js
import { fetchSingleJoke, fetchTwoPartJoke } from './api.js';

// Cache DOM elements for performance
const jokeButton = document.getElementById('jokeButton');
const newJokeButton = document.getElementById('newJokeButton');
const jokeElement = document.getElementById('joke');
const categorySelect = document.getElementById('categorySelect');

// Function to display a loading state while fetching a joke
function showLoadingState() {
    jokeElement.textContent = 'Loading...';
}

// Function to display the joke or an error message
function displayJoke(data) {
    if (data.joke) {
        jokeElement.textContent = data.joke; // Single joke
    } else if (data.setup && data.delivery) {
        jokeElement.textContent = `${data.setup} - ${data.delivery}`; // Two-part joke
    } else {
        jokeElement.textContent = 'No joke found. Try again later.'; // If no joke is returned
    }
}

// Function to handle fetching the joke from the API
function fetchJokeFromAPI(category) {
    showLoadingState(); // Show loading message before fetching

    fetchSingleJoke(category) // You could also use fetchTwoPartJoke(category) here
        .then(data => displayJoke(data))
        .catch(() => {
            jokeElement.textContent = 'Oops! Something went wrong. Please try again later.'; // Error message
        });
}

// Event listener for the "Get Joke" button
jokeButton.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category
    fetchJokeFromAPI(category); // Fetch joke when the button is clicked
});

// Event listener for the "New Joke" button
newJokeButton.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category
    fetchJokeFromAPI(category); // Fetch a new joke when the "New Joke" button is clicked
});

// Event listener for clicking the joke itself to fetch a new one
jokeElement.addEventListener('click', function() {
    const category = categorySelect.value; // Get selected category
    fetchJokeFromAPI(category); // Fetch a new joke when the current joke is clicked
});
