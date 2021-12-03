const express = require('express');
const router = express.Router();
const {getEpisodes} = require('../controllers/index');

router.get('/', getEpisodes);

module.exports = router;