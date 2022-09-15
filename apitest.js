const axios = require('axios');
require('dotenv').config();

// axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates', {
//     params: {
//         origin: 'LAS',
//         destination: 'ONT',
//         departure_at: '2022-10-01',
//         return_at: '',
//         sorting: 'price',
//         direct: false,
//         currency: 'usd',
//         limit: 30,
//         page: 1,
//         token: process.env.API_TOKEN

//     }
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

axios.get('http://api.travelpayouts.com/v2/prices/month-matrix', {
    params: {
        currency: 'usd',
        origin: 'ONT',
        destination: 'LAX',
        month: '2022-10-10',
        trip_duration: '3',
        token: process.env.API_TOKEN

    }
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

// axios.get('http://engine.hotellook.com/api/v2/cache.json', {
//     params: {
//         location: 'Las Vegas',
//         checkIn: '2022-10-10',
//         checkOut: '2022-10-12',
//         currency: 'usd',
//         limit: 4,
//         token: process.env.API_TOKEN
//     }
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });