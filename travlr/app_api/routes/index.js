const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

/* GET home page. */
router.get('/trips', ctrlTrips.tripsList);

module.exports = router;
