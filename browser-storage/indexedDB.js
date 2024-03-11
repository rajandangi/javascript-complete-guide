const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

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

// 1. Let us open our database
let db = null;
const dbRequest = window.indexedDB.open("MyTestDatabase", 1);

// if there was any problem opening the database, an error event will be triggered
dbRequest.onerror = (event) => {
    console.error("Why didn't you allow my web app to use IndexedDB?!");
};

// This event is triggered when the database is opened successfully
dbRequest.onsuccess = (event) => {
    db = event.target.result;
};

// When you create a new database or increase the version number of an existing database,
// the onupgradeneeded event will be triggered
dbRequest.onupgradeneeded = function (event) {
    // Save the IDBDatabase interface
    db = event.target.result;

    // 2. Create an objectStore to hold information about our products. We're
    // going to use "id" as our key path because it's guaranteed to be unique
    const objStore = db.createObjectStore("products", { keyPath: "id" });

    // 3. Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
    objStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');

        productsStore.add({ id: 'p1', title: 'A First Product', price: 12.99, tags: ['Expensive', 'Luxury'] });
    }
};


storeBtn.addEventListener('click', () => {
    if (!db) {
        console.error('No database found!');
        return;
    }
    if (!db.objectStoreNames.contains('products')) {
        console.error('No "products" object store found!');
        return;
    }
    // Store values in the newly created objectStore.
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');

    productsStore.add({ id: 'p3', title: 'A First Product', price: 12.99, tags: ['Expensive', 'Luxury'] });
});


retrieveBtn.addEventListener('click', () => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    //Get a single item from the store by its key
    const request = productsStore.get('p1');

    request.onsuccess = function () {
        console.log(request.result);
    }
});