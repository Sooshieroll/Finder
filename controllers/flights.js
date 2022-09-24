const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const { urlencoded } = require('express');
const { DatabaseError } = require('pg');
require('dotenv').config();
const moment = require('moment');


router.get('/', async (req, res) => {
    //get all of the flights from the database
    let flights = await db.Flight.findAll();
    flights = flights.map(f => f.toJSON()); // removes all of the unnecessary data
    console.log(flights); // shows me all of the flight data -> previous Values
    //render the (flights/index) page
    res.render('flights/index', { flights: flights });
})

router.get('/new', (req, res) => {
    res.render('flights/new');
});

router.get('/:id', async (req, res) => {
    // pring flight to verify
    let flight = await db.Flight.findOne({
        where: { id: req.params.id }
    });
    flight = flight.toJSON();
    console.log('===== this is the show route ====');
    console.log(flight);
    // go to the database and grab one flight

    // render the flights/show page with the flight
    res.render('flights/show', { flight: flight });
})

// router.get('/departureResults', (req, res) => {
//     // get back the search item
//     console.log('>>>> SEARCH DATA', req.query)
//     // use axios to find the results
//     // render the flights/departureResults page
// })
const flightPromises = [];
router.post('/new', async (req, res) => {
    console.log('INFO NEEDED', Object.assign({}, req.body));
    let IATAOrigin = await locationToIATA(req.body.origin);
    let IATADestination = await locationToIATA(req.body.destination);
    const departureFlight = axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates', {
        params: {
            origin: IATAOrigin,
            destination: IATADestination,
            departure_at: req.body.departure_at,
            return_at: '',
            sorting: 'price',
            direct: true,
            currency: 'usd',
            limit: 1,
            page: 1,
            token: process.env.API_TOKEN
        }
    })

    const returnFlight = axios.get('https://api.travelpayouts.com/aviasales/v3/prices_for_dates', {
        params: {
            origin: IATADestination,
            destination: IATAOrigin,
            departure_at: req.body.departure_at,
            return_at: '',
            sorting: 'price',
            direct: true,
            currency: 'usd',
            limit: 1,
            page: 1,
            token: process.env.API_TOKEN
        }
    })
    flightPromises.push(departureFlight);
    flightPromises.push(returnFlight);
    Promise.all(flightPromises).then(([departureResponse, returnResponse]) => {
        console.log(departureResponse.data.data);
        console.log(returnResponse.data.data);
        res.render('flights/departureResults', { data: departureResponse.data.data });

    })


    async function locationToIATA(location) {
        const IATAData = await db.IATA.findOne({
            where: {
                Name: location
            }
        })
        return IATAData.IATACode;
    }
});


router.post('/show', async (req, res) => {
    // print req.body to view form inputs
    console.log('**** /show', req.body);
    // create flight for database
    const newFlight = await db.Flight.create({
        origin: req.body.origin,
        destination: req.body.destination,
        departure_at: req.body.departure_at,
        userId: parseInt(req.body.userId)
    });
    console.log(newFlight.toJSON());
    // res.redirect to all following flights
    res.redirect('/flights')
});

module.exports = router;