function createNavigationBar(){
    const navDiv = document.getElementById('nav_menu');
    navDiv.innerHTML = "";
    const menuItems = document.querySelectorAll('div.cards');

    for (let i = 0; i < menuItems.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = '<a id="nav-'+ menuItems[i].id +'" class="nav_link">' + menuItems[i].dataset.nav + ' <span class="small">(' + menuItems[i].dataset.date + ')</span></a>';
        navDiv.appendChild(newDiv);

        newDiv.addEventListener( 'click', function(){
            window.scrollTo({ top: menuItems[i].offsetTop-50 , behavior: 'smooth'});
        })
    }
}

function createTravelCards(){
    const mainDiv = document.getElementById('main');
    mainDiv.innerHTML = "";
    for (let i = 0; i < Client.tripsTestData.length; i++) {
        let date = new Date()
        let day = date.getDate();
        let month = String(date.getMonth()+1).padStart(2, "0");
        let year = date.getFullYear();
        let today = new Date(`${year}-${month}-${day}`);
        const DaysUntil = (Client.tripsTestData[i].date_start- today.getTime()) / (1000 * 3600 * 24);

        const newDiv = document.createElement('div');
        newDiv.classList.add("cards");
        newDiv.dataset.nav = Client.tripsTestData[i].city;
        newDiv.dataset.date = (new Date(Client.tripsTestData[i].date_start)).toLocaleDateString();
        newDiv.setAttribute("id", "card-"+i);

        /*<div class="buttons">
            <button>+ add lodging info</button>
            <button>+ add packing list</button>
            <button>+ add notes</button>
        </div> */

        newDiv.innerHTML =` 
        <div class="main_left">
        <div class="image center">
            <img src="${Client.tripsTestData[i].img}" >
        </div>
        </div>
        <div class="main_right">
        <div class="maininfo center">
            <span class="big">My trip to:</span>&emsp;<span class="big bold" id="city-001">${Client.tripsTestData[i].city}</span><br>
            <span class="big">Departing:</span>&emsp;<span class="big bold" id="dep-date-001">${(new Date(Client.tripsTestData[i].date_start)).toLocaleDateString()}</span><br>
            <span class="big">Days to stay :</span>&emsp;<span class="big bold" id="stay-days-001">${Client.tripsTestData[i].days} days</span>
        </div>
        <div class="flightinfo">
            <div><span class="big">flight info:</span></div>
            <div class="right"><span class="bold">Departure: 22:00<br>DSS 21<br>Arrival: 05:23<br>AF 816</span></div>
        </div>
        <div class="buttons">
            <button onclick="return Client.deleteTrip('${i}')">remove trip</button>
        </div>
        <div class="additionalinfo center">
            <div class="daysuntil">
            This trip is <span id="days-until-dep-001">${DaysUntil}</span> days away
            </div>
            <div class="weather" id="weather_${i}">
            </div>
        </div>
        </div>`
        
        mainDiv.appendChild(newDiv);

        if (Client.tripsTestData[i].weather[0]!=null){
            Client.createWeatherTable(Client.tripsTestData[i], i);
        }else{
            const weatherDiv = document.getElementById('weather_'+i);
            weatherDiv.style = "display:none;";
        }
    }

    createNavigationBar();
}

function createWeatherTable(data, index){
    const weatherDiv = document.getElementById('weather_'+index);
    weatherDiv.innerHTML = "";

    const newD = document.createElement('div');
    newD.classList = "weather_header";

    const newH3div = document.createElement('div');
    const newH3 = document.createElement('h3');
    newH3.innerText = data.city;
    newH3div.appendChild(newH3);

    console.log(data.weather[0]);
    if (data.weather[0]!=null){

        const src = "https://www.weatherbit.io/static/img/icons/" + data.weather[0].weather.icon + ".png";
        
        const newimgdiv = document.createElement('div');
        const newimg = document.createElement('img');
        newimg.src = src;
        newimgdiv.appendChild(newimg);

        const newh6div = document.createElement('div');
        const newh6 = document.createElement('h6');
        newh6.innerText = "C°";
        newh6div.appendChild(newh6);

        newD.appendChild(newimgdiv);
        newD.appendChild(newH3div);
        newD.appendChild(newh6div);
        
    }else{
        newD.appendChild(newH3div);
    }

    weatherDiv.appendChild(newD);

    const newTable = document.createElement('table');
    const newTr1 = document.createElement('tr');
    const newTr2 = document.createElement('tr');
    const newTr3 = document.createElement('tr');

    const newTable2 = document.createElement('table');
    const newTr12 = document.createElement('tr');
    const newTr22 = document.createElement('tr');
    const newTr32 = document.createElement('tr');

    for (let i = 0; i < data.weather.length; i++) {
       if(i<=6){
            const newTd1 = document.createElement('td');
            newTd1.innerText = (new Date(data.weather[i].valid_date)).toUTCString().split(",")[0];
            newTr1.appendChild(newTd1);
            const newTd2 = document.createElement('td');
            newTd2.innerText = data.weather[i].high_temp;
            newTr2.appendChild(newTd2);
            const newTd3 = document.createElement('td');
            newTd3.innerText = data.weather[i].high_temp;
            newTr3.appendChild(newTd3);
        }
    }

    newTable.appendChild(newTr1);
    newTable.appendChild(newTr2);
    newTable.appendChild(newTr3);
    newTable2.appendChild(newTr12);
    newTable2.appendChild(newTr22);
    newTable2.appendChild(newTr32);
    weatherDiv.appendChild(newTable);
    weatherDiv.appendChild(newTable2);

}

function createHTMLContent(){
    Client.createTravelCards();
}

export { createNavigationBar, createTravelCards, createHTMLContent, createWeatherTable}