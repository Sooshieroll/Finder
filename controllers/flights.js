const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/new', (req, res) => {
    res.render('flights/new');

});



// fetch database information - IATA

module.exports = router;