const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: []
};
// POST /add-location
router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  res.json({ message: 'Stored location!', locId: id });
});

// GET /location
router.get('/location', (req, res, next) => { });

// Export the router object to be used in app.js
module.exports = router;
