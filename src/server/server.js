/*----------------
  ----- APIS -----
  ----------------*/
const dotenv = require('dotenv');
dotenv.config();

const meaningcloud_api={
    url : 'https://api.meaningcloud.com/sentiment-2.1',
    key : process.env.MEANINGCLOUD_API_KEY,
};

const geonames_api={
    url : 'https://api.geonames.org/postalCodeSearch?',
    key: process.env.GEONAMES_API_KEY,
};

const openweather_api={
    url : 'https://api.openweathermap.org/',
    key: process.env.OPENWEATHER_API_KEY,
};

//current: https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
//forcast: https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY

const pixabay_api={
    url : 'https://pixabay.com/api/',
    key: process.env.PIXABAY_API_KEY,
};
//photo: https://pixabay.com/api/?key=25452193-28d28a675c83f5509fbedb796&q=Paris&category=travel&orientation=vertical&order=popular&per_page=3&image_type=photo
//res.hits[0].webformatURL

var path = require('path')
const express = require('express')

const app = express()

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/openweather_api', function (req, res) {
    res.send(openweather_api);
    console.log('server side log - get openweather_api:', openweather_api);
});

app.get('/pixabay_api', function (req, res) {
    res.send(pixabay_api);
    console.log('server side log - get pixabay_api:', pixabay_api);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})