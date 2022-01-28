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
    for (let i = 0; i < Client.tripsData.length; i++) {
        let date = new Date()
        let day = date.getDate();
        let month = String(date.getMonth()+1).padStart(2, "0");
        let year = date.getFullYear();
        let today = new Date(`${year}-${month}-${day}`);
        const DaysUntil = (Client.tripsData[i].date_start- today.getTime()) / (1000 * 3600 * 24);

        const newDiv = document.createElement('div');
        newDiv.classList.add("cards");
        newDiv.dataset.nav = Client.tripsData[i].city;
        newDiv.dataset.date = (new Date(Client.tripsData[i].date_start)).toLocaleDateString();
        newDiv.setAttribute("id", "card-"+i);

        /*<div class="buttons">
            <button>+ add lodging info</button>
            <button>+ add packing list</button>
            <button>+ add notes</button>
        </div> */

        newDiv.innerHTML =` 
        <div class="main_left">
        <div class="image center">
            <img src="${Client.tripsData[i].img}" width="50%" >
        </div>
        </div>
        <div class="main_right">
        <div class="maininfo center">
            <span class="big">My trip to:</span>&emsp;<span class="big bold" id="city-001">${Client.tripsData[i].city}</span><br>
            <span class="big">Departing:</span>&emsp;<span class="big bold" id="dep-date-001">${(new Date(Client.tripsData[i].date_start)).toLocaleDateString()}</span><br>
            <span class="big">Days to stay :</span>&emsp;<span class="big bold" id="stay-days-001">${Client.tripsData[i].days} days</span>
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
            <div class="weather">
            Typical weather for then is:<br>
            <span id="weather-api-001">87F dsgh gfh<span>
            </div>
        </div>
        </div>`
        
        mainDiv.appendChild(newDiv);
    }

    createNavigationBar();
}

function createHTMLContent(){
    Client.createTravelCards();
}

export { createNavigationBar, createTravelCards, createHTMLContent }