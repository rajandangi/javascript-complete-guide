/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Map: () => (/* binding */ Map)
/* harmony export */ });
class Map {
  constructor(coords) {
    this.render(coords);
  }
  render(coordinates) {
    if (!google) {
      alert('Could not load maps library - please try again later!');
      return;
    }
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

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    if ('content' in document.createElement('template')) {
      // Deep clone the content of the #modal-template element
      const modalElements = document.importNode(this.modalTemplateEl.content, true);
      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');
      const contentElement = document.importNode(this.contentTemplateEl.content, true);
      this.modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement); // this.modalElement.remove();
      document.body.removeChild(this.backdropElement); // this.backdropElement.remove();
      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddressFromCoordinates: () => (/* binding */ getAddressFromCoordinates),
/* harmony export */   getCoordinatesFromAddress: () => (/* binding */ getCoordinatesFromAddress)
/* harmony export */ });
const GOOGLE_API_KEY = 'AIzaSyD99o_yXLkIIlSPBCF5VtN53_-iJELxY6Q';

/**
 * Retrieves the address from the given coordinates using the Google Maps Geocoding API.
 * @param {Object} coords - The coordinates object containing latitude and longitude.
 * @returns {Promise<string>} The address corresponding to the given coordinates.
 * @throws {Error} If the API request fails or if there is an error in the response data.
 */
async function getAddressFromCoordinates(coords) {
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
async function getCoordinatesFromAddress(address) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ "./src/UI/Modal.js");
/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ "./src/UI/Map.js");
/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ "./src/Utility/Location.js");



class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    // if we don't bind the method to the class, the 'this' keyword will refer to the button element
    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
  }
  sharePlaceHandler() {
    const shareLinkInput = document.getElementById('share-link');
    if (!navigator.clipboard) {
      shareLinkInput.select();
      return;
    }
    navigator.clipboard.writeText(shareLinkInput.value).then(() => {
      alert('Copied into clipboard!');
    }).catch(err => {
      console.log(err);
      shareLinkInput.select();
    });
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
      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);
    }

    // Send a POST request to the server to store the location
    fetch('http://localhost:3001/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      const locationId = data.locId;
      this.shareBtn.disabled = false;
      const shareLinkInput = document.getElementById('share-link');
      shareLinkInput.value = `${location.origin}/my-place/?location=${locationId}`;
    });
  }
  locateUserHandler() {
    // Check if the browser supports the geolocation API
    if (!navigator.geolocation) {
      alert('Location feature is not available in your browser - please use a more modern browser or enter an address manually.');
      return;
    }

    // Show a loading modal while the location is being fetched
    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait!');
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
      const address = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getAddressFromCoordinates)(coordinates);
      modal.hide();
      this.selectPlace(coordinates, address);
    },
    // Error callback
    error => {
      modal.hide();
      alert('Could not locate you unfortunately. Please enter an address manually!');
    });
  }
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    }
    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait!');
    modal.show();

    // Fetch the coordinates for the entered address
    try {
      const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesFromAddress)(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      alert(err.message);
    }
    modal.hide();
  }
}
const placeFinder = new PlaceFinder();
})();

/******/ })()
;
//# sourceMappingURL=SharePlace.js.map