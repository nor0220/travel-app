export let tripsTestData=[
    {
        city: "Budapest",
        date_start: (new Date("2022-12-10")).getTime(),
        date_end: (new Date("2022-12-20")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/g0e9087a7f0d0b0c7a14dfa9212c7d1f65cca26003cfb882dff3fc173bf4625d16c720c647ce0455be669215b400086c59135e7cdc243a8109a1bd1f879405d8f_640.jpg",
        weather: [
            {
                high_temp: 6.5,
                valid_date: "2022-01-29",
                weather: {
                  icon: "r04d",
                },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-30",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-31",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
        ],
    },
    {
        city: "Oslo",
        date_start: (new Date("2022-05-10")).getTime(),
        date_end: (new Date("2022-05-16")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/g64a258468ed58167c72ffff2b5a19213a847492489e499dcfd0899ceee7e7e61a3c529fe254c6651538398191c9a679d8e5d4814bab503c8e5977f1d2cc93826_640.jpg",
        weather: [
            {
                high_temp: 6.5,
                valid_date: "2022-01-29",
                weather: {
                  icon: "r04d",
                },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-30",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-31",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
        ],
    },
    {
        city: "Paris",
        date_start: (new Date("2022-06-17")).getTime(),
        date_end: (new Date("2022-06-23")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/gda4b6008ebad3180cc404392ce72d608f0819a7f31558e0e9a9a549a6a48a6de052d92fd780158486cf0ced82228b9b9_640.jpg",
        weather: [
            {
                high_temp: 6.5,
                valid_date: "2022-01-29",
                weather: {
                  icon: "r04d",
                },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-30",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
            {
                high_temp: 6.5,
                valid_date: "2022-01-31",
                weather: {
                  icon: "r04d",
                 },
                low_temp: 3.1,
            },
        ],
    },
];

function saveData(city, date_start, date_end, days, img, weather){
    let newdata ={
        city: city,
        date_start: date_start,
        date_end: date_end,
        days: days,
        img: img,
        weather: weather,
    };

    Client.tripsTestData.push(newdata);
    console.log("After saveData: ", Client.tripsTestData);
}

export { saveData }