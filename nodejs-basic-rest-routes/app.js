const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use((req, res, next) => {
    // * means all domains can access the server
    // change * to a specific domain to allow only that domain to access the server 
    // e.g. res.setHeader('Access-Control-Allow-Origin', 'https://www.example.com');
    res.setHeader('Access-Control-Allow-Origin', '*');
    //OPTIONS is a request method used to check if the server allows a certain request
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName
//   });
// });

app.listen(3000);
