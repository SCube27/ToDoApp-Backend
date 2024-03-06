const express = require('express');
const { PORT } = require('./config/server.config');
const router = require('./routes/home');
const customrouter = require('./routes/custom');

const app = express();

app.use('/api', router); // locahost:3000/api/home
app.use('/custom', customrouter); // localhost:3000/custom/custom2

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
});