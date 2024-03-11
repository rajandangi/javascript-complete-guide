import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordinatesFromAddress, getAddressFromCoordinates } from './Utility/Location';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn');

        // if we don't bind the method to the class, the 'this' keyword will refer to the button element
        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
        // this.shareBtn.addEventListener('click', this.sharePlaceHandler.bind(this));
    }

    /**
     * Selects a place on the map and renders it if the map is already initialized,
     * otherwise creates a new map instance and renders the place.
     *
     * @param {Object} coordinates - The coordinates of the selected place.
     */
    selectPlace(coordinates, address) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }

        this.shareBtn.disabled = false;
        const shareLinkInput = document.getElementById('share-link');
        shareLinkInput.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
    }


    locateUserHandler() {
        // Check if the browser supports the geolocation API
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser - please use a more modern browser or enter an address manually.');
            return;
        }

        // Show a loading modal while the location is being fetched
        const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
        modal.show();

        // Fetch the user's location
        navigator.geolocation.getCurrentPosition(
            // Success callback
            async successResult => {
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude
                };
                // Render the map with the user's location
                const address = await getAddressFromCoordinates(coordinates);
                modal.hide();
                this.selectPlace(coordinates, address);
            },
            // Error callback
            error => {
                modal.hide();
                alert('Could not locate you unfortunately. Please enter an address manually!');
            }
        );
    }

    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if (!address || address.trim().length === 0) {
            alert('Invalid address entered - please try again!');
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
        modal.show();

        // Fetch the coordinates for the entered address
        try {
            const coordinates = await getCoordinatesFromAddress(address);
            this.selectPlace(coordinates, address);
        } catch (err) {
            alert(err.message);
        }
        modal.hide();
    }
}
const placeFinder = new PlaceFinder();