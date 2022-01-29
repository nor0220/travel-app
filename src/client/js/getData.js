export let getApiData={};

function getImage(city, date_start, date_end){
    const getImageApi = async ()=>{
        const res = await fetch('http://localhost:8081/pixabay_api');
        try {
            const api_data = await res.json();
            return api_data;
        }catch(error) {
            console.log("getImageApi error", error);
        }
    }

    getImageApi()
    .then(async (api_data) => {
        const API_key = api_data.key;
        const API_url = api_data.url;
        
        //photo: https://pixabay.com/api/?key=25452193-28d28a675c83f5509fbedb796&q=Paris&category=travel&orientation=vertical&order=popular&per_page=3&image_type=photo
        //res.hits[0].webformatURL
        const city_name= city.split(",")[0];

        const img_website = API_url + "?key=" + API_key + "&q=" + city_name + "&category=travel&orientation=vertical&order=popular&per_page=3&image_type=photo";

        const response = await fetch(img_website);
        try {
            const img_data = await response.json();
            console.log("img file: " ,img_data);
            Client.getApiData.img = img_data.hits[0].webformatURL;
            return Client.getApiData;
        }catch(error) {
            console.log("getImageApi error", error);
        }
    })
    .then(async () =>{
        const getWeatherApi = async ()=>{
            const res = await fetch('http://localhost:8081/weatherbit_api');
            try {
                const weather_api_data = await res.json();
                return weather_api_data;
            }catch(error) {
                console.log("getWeatherApi error", error);
            }
        }
    
        getWeatherApi()
        .then(async (weather_api_data) =>{
            const API_key_weather = weather_api_data.key;
            const API_url_weather = weather_api_data.url;
    
            //https://api.weatherbit.io/v2.0/forecast/daily?city=Budapest&key=

            const city_name= city.replace(/\s/g, '');
    
            const weather_website = API_url_weather + "city=" + city_name + "&key=" + API_key_weather;
            console.log("weather_website: ",weather_website)
    
            const response = await fetch(weather_website);
            try {
                const weather_data = await response.json();
                console.log("weather data: ", weather_data);
                Client.getApiData.weather = weather_data.data;
                return Client.getApiData;
            }catch(error) {
                console.log("error", error);
            }
        })
        .then(function(){
            let date = new Date()
            let day = date.getDate();
            let month = String(date.getMonth()+1).padStart(2, "0");
            let year = date.getFullYear();
    
            let today = new Date(`${year}-${month}-${day}`);
            let start = (new Date(date_start)).getTime();
            let end = (new Date(date_end)).getTime();
    
            // To calculate the time difference of two dates
            const days = (end - start) / (1000 * 3600 * 24);
    
            Client.saveData(city, start, end, days, Client.getApiData.img, Client.getApiData.weather);
        })
        .then(function(){
            Client.createHTMLContent();
        })
    })
}

function getWeather(city){
    
}

async function getData(city, date_start, date_end){
    Client.getImage(city, date_start, date_end);
}

export { getData, getImage, getWeather }