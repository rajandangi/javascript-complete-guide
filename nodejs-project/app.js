const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use the body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    next();
})

app.use((request, response, next) => {
    const userName = request.body.username || 'Unknown User';
    //Render the index.ejs file and pass the pass options to the view
    response.render('index', {
        user: userName,
        role: 'admin'
    });
});

app.listen(3000);