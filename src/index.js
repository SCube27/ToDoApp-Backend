const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apirouter = require('./routes/home');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

// Sent to routing layer
app.use('/api', apirouter); // locahost:3000/api/v1/home

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
});