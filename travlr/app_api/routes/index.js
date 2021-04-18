const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['sha1', 'sha512', 'RS256', 'HS256']
});



const ctrlTrips = require('../controllers/trips');
const ctrlBlog = require('../controllers/blog');
const ctrlAuth = require('../controllers/authentication')

//get all routers
router.get('/trips', ctrlTrips.tripsList);
router.get('/blog', ctrlBlog.blogList);

//get specific item routers
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);
router.get('/blog/:blogCode', ctrlBlog.blogFindByCode);

//post routers
router.post('/trips',auth, ctrlTrips.tripsAddTrip)
router.post('/login', ctrlAuth.login)
router.post('/register', ctrlAuth.register)

//put routers
router.put('/trips/:tripCode', auth, ctrlTrips.tripsUpdateTrip);

module.exports = router;
