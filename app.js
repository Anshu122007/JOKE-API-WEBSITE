// Import the fetch functions from api.js
import { fetchSingleJoke, fetchTwoPartJoke } from './api.js';

// Cache DOM elements for performance
const jokeButton = document.getElementById('jokeButton');
const newJokeButton = document.getElementById('newJokeButton');
const jokeElement = document.getElementById('joke');
const categorySelect = document.getElementById('categorySelect');

// Function to show loading state while fetching
function showLoadingState() {
    jokeElement.textContent = 'Loading...';
}

// Function to display a message when no joke is found
function showNoJokeFoundMessage() {
    jokeElement.textContent = 'No joke found. Try again later.';
}

// Function to display the joke or an error message
function displayJoke(data) {
    if (data.joke) {
        jokeElement.textContent = data.joke; // Display single-line joke
    } else if (data.setup && data.delivery) {
        jokeElement.textContent = `${data.setup} - ${data.delivery}`; // Display two-part joke
    } else {
        showNoJokeFoundMessage(); // If no joke is returned
    }
}

// Function to handle errors
function handleError() {
    jokeElement.textContent = 'Oops! Something went wrong. Please try again later.'; // Show error message
}

// Function to fetch a joke from the API
function fetchJokeFromAPI(category) {
    showLoadingState(); // Show loading message before fetching joke

    fetchSingleJoke(category) // Call to fetch a single joke
        .then(data => displayJoke(data)) // Display the joke when fetched
        .catch(handleError); // Handle any errors
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
