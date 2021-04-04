const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/travel');

/* GET home page. */
router.get('/', ctrlMain.travelList);

module.exports = router;
