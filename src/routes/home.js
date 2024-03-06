const express = require('express');
const { homePingcontroller } = require('../controllers/home.controller');

const router = express.Router(); // created a express router object

router.get('/home', homePingcontroller);

module.exports = router;