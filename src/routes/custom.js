const express = require('express');
const { homePingcontroller } = require('../controllers/home.controller');

const customrouter = express.Router(); // created a express router object

customrouter.get('/custom', homePingcontroller);

customrouter.get('/custom2', homePingcontroller);

module.exports = customrouter;