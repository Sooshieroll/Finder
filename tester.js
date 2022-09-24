// const axios = require('axios');
// require('dotenv').config();

// const flightPromises = [];
// const departureFlight = axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates', {
//     params: {
//         origin: 'LAS',
//         destination: 'ONT',
//         departure_at: '2022-10-01',
//         return_at: '',
//         sorting: 'price',
//         direct: false,
//         currency: 'usd',
//         limit: 3,
//         page: 1,
//         token: process.env.API_TOKEN

//     }
// })
// const returnFlight = axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates', {
//     params: {
//         origin: 'ONT',
//         destination: 'LAS',
//         departure_at: '2022-10-02',
//         return_at: '',
//         sorting: 'price',
//         direct: false,
//         currency: 'usd',
//         limit: 3,
//         page: 1,
//         token: process.env.API_TOKEN

//     }
// })
// flightPromises.push(departureFlight);
// flightPromises.push(returnFlight);
// Promise.all(flightPromises).then(([departureResponse, returnResponse]) => {
//     console.log(departureResponse.data);
//     console.log(returnResponse.data);
// });

// .then(function (response) {
//     console.log(response.data.data);
//     res.render('flights/departureResults', { data: response.data.data });
// })
//     .catch(function (error) {
//         console.log(error);
//     });

function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
}

console.log(dateIsValid('departure_at'));

const departureTime = '2022-10-17T09:00:00-07:00';

const date = new Date('2015-03-25');
const newDate = date.toISOString().split('T')[0];
// const newDate = date.toISOString();

console.log(new Date);
