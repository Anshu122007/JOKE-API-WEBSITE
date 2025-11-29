// Function to fetch a single joke from the selected category
export function fetchSingleJoke(category) {
    return fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching joke:', error);
            throw error;
        });
}

// Function to fetch a two-part joke from the selected category
export function fetchTwoPartJoke(category) {
    return fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching joke:', error);
            throw error;
        });
}
