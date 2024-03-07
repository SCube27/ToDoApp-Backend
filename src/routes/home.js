const express = require('express');
const v1router = require('./v1/index');
const v2router = require('./v2');

const apirouter = express.Router(); // created a express router object

apirouter.use('/v1', v1router); // /v1/home
apirouter.use('/v2', v2router); // v2/home

module.exports = apirouter;