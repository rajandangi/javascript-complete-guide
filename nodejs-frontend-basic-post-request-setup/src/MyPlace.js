import { Map } from "./UI/Map";
// import sanitizeHtml from "sanitize-html";

class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl = document.querySelector('header h1');
        headerTitleEl.textContent = address;
        //headerTitleEl.innerHTML = sanitizeHtml(address);                                                                                                                                               
    }
}

// Get the query parameters from the URL
const url = new URL(location.href);
const queryParams = url.searchParams;
const locId = queryParams.get('location');

fetch('http://localhost:3001/location/' + locId)
    .then(response => {
        if (response.status === 500) {
            throw new Error('Could not find location!');
        }
        return response.json();
    })
    .then(data => {
        new LoadedPlace(data.coordinates, data.address);
    });
