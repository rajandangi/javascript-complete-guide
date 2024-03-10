const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = '12345';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    document.cookie = `userId=${userId};max-age=360`;// max-age is in seconds
    document.cookie = `user=${JSON.stringify(user)}`;
});


retrieveBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => i.trim());
    console.log(data);
});