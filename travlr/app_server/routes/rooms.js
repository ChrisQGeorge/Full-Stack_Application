const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/rooms');

/* GET home page. */
router.get('/', ctrlMain.rooms);

module.exports = router;
