const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/news');

/* GET home page. */
router.get('/', ctrlMain.news);

module.exports = router;
