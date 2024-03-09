const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');

// Creation of a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// Define Response type
xhr.responseType = 'json';

// Define what happens on successful data retrieval
xhr.onload = function () {
    const listOfPosts = xhr.response;
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true); // Deep clone of the postTemplate el content
    }
}

// Send request
xhr.send();


console.log(postTemplate.content)
