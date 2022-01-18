const express = require('express');

// has to do with the port that heroku provides
// and also another port for testing purposes
const PORT = process.env.PORT || 3001;

// instantiating the main server
const app = express();

// get the routes and api logic defined in these modules
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// express middleware
// The express.urlencoded({extended: true}) method is a method built into Express.js. 
// It takes incoming POST data and converts it to key/value pairings that can be accessed in 
// the req.body object. The extended: true option set inside the method call informs our server 
// that there may be sub-array data nested in it as well, so it needs to look as deep into 
// the POST data as possible to parse all of the data correctly.
app.use(express.urlencoded({ extended: true }));
// The express.json() method we used takes incoming POST data in the form of JSON and 
// parses it into the req.body JavaScript object. Both of the above middleware functions 
// need to be set up every time you create a server that's looking to accept POST data.
app.use(express.json());
// express.js - notes, creating routes to serve index.html.
// tells the server to make all the files from public folder
// readily available without needing a server endpoint.
// whenever we sendFile() an html file and it calls css or js in its code with link or script.
// the server will be able to recognize that call without an endpoint
app.use(express.static('public'));


// sets up a path in reference to our server. such as <ourhost>/api
// will define all api get and post route requests. Regular / will define the 
// route to be served html pages.
// these functions must be right here above listen to work
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// makes server listen for requests to the server at designated port.
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});
