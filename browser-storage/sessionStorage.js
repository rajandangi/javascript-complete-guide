const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = '12345';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('userId', userId);

    // sessionStorage can only store strings
    // JSON.stringify() converts an object to a string
    sessionStorage.setItem('user', JSON.stringify(user));
});


retrieveBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('userId');
    const extractedUser = JSON.parse(sessionStorage.getItem('user'));

    if (extractedId) {
        console.log('user Id:', extractedId);
    }
    if (extractedUser) {
        console.log(extractedUser);
    }
});