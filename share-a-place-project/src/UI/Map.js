export class Map {
    constructor(coords) {
        this.render(coords);
    }

    /**
     * Renders a map with a marker at the specified coordinates.
     * @param {Object} coordinates - The coordinates of the location to be displayed on the map.
     */
    render(coordinates) {
        if (!google) {
            alert('Could not load maps library - please try again later');
            return;
        }

        // https://developers.google.com/maps/documentation/javascript/overview#Loading_the_Maps_API
        const map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 16
        });
        new google.maps.Marker({
            position: coordinates,
            map: map
        });
    }
}