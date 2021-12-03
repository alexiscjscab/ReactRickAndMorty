const express = require('express');
const router = express.Router();
const characters = require('./characters')
const locations = require('./locations');
const episodes = require('./episodes');


router.use('/characters', characters);
router.use('/location', locations);
router.use('/episodes', episodes);

module.exports = router;