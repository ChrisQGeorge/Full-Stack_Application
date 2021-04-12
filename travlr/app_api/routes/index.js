const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const ctrlBlog = require('../controllers/blog');

//get all routers
router.get('/trips', ctrlTrips.tripsList);
router.get('/blog', ctrlBlog.blogList);

//get specific item routers
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);
router.get('/blog/:blogCode', ctrlBlog.blogFindByCode);

//post routers
router.post('/trips', ctrlTrips.tripsAddTrip)

//put routers
router.put('/trips', ctrlTrips.tripsUpdateTrip);

module.exports = router;
