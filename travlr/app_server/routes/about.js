const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlMain.about);

module.exports = router;
