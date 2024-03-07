const express = require('express');
const { homePingcontroller } = require('../../controllers/home.controller');

const v2router = express.Router();

v2router.get('/ping', homePingcontroller); // /home

module.exports = v2router;