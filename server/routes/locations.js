const express = require('express');
const {getLocation}  = require('../controllers');

const router = express.Router();

router.get('/',getLocation);

module.exports = router;