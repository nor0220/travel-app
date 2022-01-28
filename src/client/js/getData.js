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

        const website = API_url + "?key=" + API_key + "&q=" + city + "&category=travel&orientation=vertical&order=popular&per_page=3&image_type=photo";

        const response = await fetch(website);
        try {
            const img_data = await response.json();
            console.log("img file: " ,img_data);
            Client.getApiData.img = img_data.hits[0].webformatURL;
            return Client.getApiData;
        }catch(error) {
            console.log("getImageApi error", error);
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

        Client.saveData(city, start, end, days, Client.getApiData.img, "");
    })
    .then(function(){
        Client.createHTMLContent();
    })
}

async function getData(city, date_start, date_end){
    Client.getImage(city, date_start, date_end);
}

export { getData, getImage }