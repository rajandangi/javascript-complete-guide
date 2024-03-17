const GOOGLE_API_KEY = 'AIzaSyD99o_yXLkIIlSPBCF5VtN53_-iJELxY6Q';

/**
 * Retrieves the address from the given coordinates using the Google Maps Geocoding API.
 * @param {Object} coords - The coordinates object containing latitude and longitude.
 * @returns {Promise<string>} The address corresponding to the given coordinates.
 * @throws {Error} If the API request fails or if there is an error in the response data.
 */
export async function getAddressFromCoordinates(coords) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);

  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const address = data.results[0].formatted_address;
  return address;
}


/**
 * Retrieves the coordinates of a given address using the Google Maps Geocoding API.
 * -----------
 * https://developers.google.com/maps/documentation/geocoding/overview
 * 
 * @param {string} address - The address to retrieve coordinates for.
 * @returns {Promise<{ lat: number, lng: number }>} - The coordinates of the address.
 * @throws {Error} - If there is an error fetching the coordinates or if the address is invalid.
 */
export async function getCoordinatesFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}