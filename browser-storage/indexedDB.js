const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = '12345';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
/**
 * Basic pattern
 * --------------
 * The basic pattern that IndexedDB encourages is the following:
 * 1. Open a database.
 * 2. Create an object store in the database.
 * 3. Start a transaction and make a request to do some database operation, like adding or retrieving data.
 * 4. Wait for the operation to complete by listening to the right kind of DOM event.
 * 5. Do something with the results (which can be found on the request object).
 */

// Let us open our database
const dbRequest = window.indexedDB.open("MyTestDatabase", 1);

// This event is only implemented in recent browsers
dbRequest.onupgradeneeded = function (event) {
    // Save the IDBDatabase interface
    const db = event.target.result;

    // Create an objectStore for this database
    const objStore = db.createObjectStore("products", { keyPath: "id" });

    objStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');

        productsStore.add({ id: 'p1', title: 'A First Product', price: 12.99, tags: ['Expensive', 'Luxury'] });
    }
};

dbRequest.onerror = function (event) {

};

storeBtn.addEventListener('click', () => {

});


retrieveBtn.addEventListener('click', () => {

});