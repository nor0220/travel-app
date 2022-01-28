export let tripsData=[
    {
        city: "Budapest",
        date_start: (new Date("2022-12-10")).getTime(),
        date_end: (new Date("2022-12-20")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/g4014d497db21fc404627278583d902b2b2ea7d39c326f663271e1cdb068592ac997553add81c9f861fb59e0a03de5cca55e468f79cbeac1f9b0a92034f28d5f4_640.jpg",
        weather: "",
    },
    {
        city: "Oslo",
        date_start: (new Date("2022-05-10")).getTime(),
        date_end: (new Date("2022-05-16")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/g64a258468ed58167c72ffff2b5a19213a847492489e499dcfd0899ceee7e7e61a3c529fe254c6651538398191c9a679d8e5d4814bab503c8e5977f1d2cc93826_640.jpg",
        weather: "",
    },
    {
        city: "Paris",
        date_start: (new Date("2022-06-17")).getTime(),
        date_end: (new Date("2022-06-23")).getTime(),
        days: 10,
        img: "https://pixabay.com/get/gda4b6008ebad3180cc404392ce72d608f0819a7f31558e0e9a9a549a6a48a6de052d92fd780158486cf0ced82228b9b9_640.jpg",
        weather: "",
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

    Client.tripsData.push(newdata);
    console.log("After saveData: ", Client.tripsData);
}

export { saveData }