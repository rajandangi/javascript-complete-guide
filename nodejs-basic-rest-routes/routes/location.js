const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

// locations is the name of the database
const uri = "mongodb+srv://rajandangi:KM3ZnsSKLA6DkOfL@mangodb-learning.0jvdnvx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

// Connect to the database once when the application starts
client.connect();

// Get the collection from the database
const getCollection = () => {
  const dbName = "locations";
  const collectionName = "user-locations";

  // Initialize the database and collection
  const db = client.db(dbName);
  return db.collection(collectionName);
};

// POST /add-location
router.post('/add-location', async (req, res, next) => {
  const collection = getCollection();

  // Prepare a new document to be inserted
  const userLocation = {
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  };

  try {
    const result = await collection.insertOne(userLocation);
    res.json({ message: 'Stored location!', locId: result.insertedId });
  } catch (err) {
    return res.status(500).json({ message: 'Database error!' });
  }
});

// GET /location 
// :locId is a dynamic segment in the URL
router.get('/location/:locId', async (req, res, next) => {
  const locationId = req.params.locId;

  const collection = getCollection();

  // Prepare a new document to be inserted
  const userLocation = { _id: new mongodb.ObjectId(locationId) };

  try {
    const result = await collection.findOne(userLocation);
    if (!result) {
      return res.status(404).json({ message: 'Not found!' });
    }
    res.json({ address: result.address, coordinates: result.coords });
  } catch (err) {
    return res.status(500).json({ message: 'Database error!' });
  }
});

// Export the router object to be used in app.js
module.exports = router;
