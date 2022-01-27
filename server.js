// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, listening);

//Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

//GET route that returns the projectData
app.get('/getData', function (req, res) {
    res.send(projectData);
    console.log('server side getData:', projectData);
});

//POST route that adds incoming data to projectData
app.post('/addData', function addData (req, res){
    let newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        user_response: req.body.user_response
      };
    
      Object.assign(projectData, newEntry);
      res.send(projectData);
      console.log('server side addData:', projectData);
});