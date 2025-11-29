// Function to fetch jokes from the selected category
export function fetchJoke(category) {
    return fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching joke:', error);
            throw error; // Throw error to be caught later
        });
}
