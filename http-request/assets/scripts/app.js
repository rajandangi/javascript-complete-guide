const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

/**
 * Sends an HTTP request.
 *
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send with the request (optional).
 * @returns {Promise} A promise that resolves with the response data.
 */
function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        // Creation of a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Set request headers
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Open a new connection, using the GET request on the URL endpoint
        xhr.open(method, url);

        // Define Response type
        xhr.responseType = 'json';

        // Define what happens on successful data retrieval
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                // xhr.response;
                reject(new Error('Something went wrong!!'));
            }
        }

        // Define what happens on error
        xhr.onerror = function () {
            reject(new Error('Failed to send request'));
        }

        // Send request
        xhr.send(JSON.stringify(data));
    })

    return promise;
}


/**
 * Fetches posts from a remote API and appends them to the DOM.
 * @returns {Promise<void>} A promise that resolves when the posts are fetched and appended.
 */
async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
        listElement.innerHTML = '';

        for (const post of responseData) {
            const postEl = document.importNode(postTemplate.content, true); // Deep clone of the postTemplate el content
            postEl.querySelector('h2').textContent = post.title;
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (err) {
        alert(err.message);
    }
}


/**
 * Creates a new post with the given title and content.
 *
 * @param {string} title - The title of the post.
 * @param {string} content - The content of the post.
 * @returns {Promise<void>} - A promise that resolves when the post is created.
 */
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}






// Event Listeners
fetchButton.addEventListener('click', fetchPosts);


form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
})

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})