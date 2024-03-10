const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = '12345';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    localStorage.setItem('userId', userId);

    // localStorage can only store strings
    // JSON.stringify() converts an object to a string
    localStorage.setItem('user', JSON.stringify(user));
});


retrieveBtn.addEventListener('click', () => {
    const extractedId = localStorage.getItem('userId');
    const extractedUser = JSON.parse(localStorage.getItem('user'));

    if (extractedId) {
        console.log(extractedId);
    }
    if (extractedUser) {
        console.log(extractedUser);
    }
});