const customers = ["Rajan", "Bhawana", "Rajesh", "Rajat", "Rajeev", "Raj"]

const activeCustomers = ["Rajan", "Rajesh", "Rajat"]
// lodash library function is used
const result = _.difference(customers, activeCustomers)
console.log(result)


//---------------------------------


const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');


/**
 * Fetches posts from a remote API and renders them on the page.
 * @returns {Promise<void>} A promise that resolves when the posts are fetched and rendered.
 */
async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        listElement.innerHTML = '';
        const listOfPosts = response.data;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true); // Deep clone of the postTemplate el content
            postEl.querySelector('h2').textContent = post.title;
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (err) {
        alert(err.message);
        console.log(err.response)
    }
}


/**
 * Creates a new post by sending a POST request to the specified URL with the provided form data.
 */
async function createPost() {
    const formData = new FormData(form);
    formData.append('userId', Math.random());

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
    console.log(response);
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
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})
