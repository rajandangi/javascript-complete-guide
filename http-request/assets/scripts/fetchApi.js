const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');


/**
 * Sends an HTTP request using the Fetch API.
 * - fetch by default uses GET method
 * - fetch by default is a promise based API so we don't need to create a new promise object unlike XMLHttpRequest
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send with the request (optional).
 * @returns {Promise} A Promise that resolves to the response data.
 */
function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: data,
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then(errData => {
                    console.log(errData);
                    throw new Error('Something went wrong-server side!');
                })
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error('Something went wrong!');
        });
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
 * Creates a new post by sending a POST request to the specified URL with the provided form data.
 */
async function createPost() {
    const formData = new FormData(form);
    formData.append('userId', Math.random());

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', formData);
}



// Event Listeners
fetchButton.addEventListener('click', fetchPosts);


form.addEventListener('submit', event => {
    event.preventDefault();
    createPost();
})

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})