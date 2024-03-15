import { Map } from "./UI/Map";
class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl = document.querySelector('header h1');
        headerTitleEl.textContent = address;
    }
}

// Get the query parameters from the URL
const url = new URL(location.href);
const queryParams = url.searchParams;
// The '+' sign in front of the string is a shortcut to convert it to a number
const coords = {
    lat: +queryParams.get('lat'),
    lng: +queryParams.get('lng')
};
const address = queryParams.get('address');


new LoadedPlace(coords, address);