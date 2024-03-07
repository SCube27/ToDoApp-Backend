const express = require('express');
const { homePingcontroller } = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');

const v1router = express.Router();

v1router.use('/todos', todoRouter);

v1router.get('/ping', homePingcontroller); // /ping

module.exports = v1router;