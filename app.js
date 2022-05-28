const express = require('express');
var cors = require('cors')
const data = require('./data.json');

const app = express();
app.use(cors())
app.use(express.json());

// GET /api/products
app.get('/api/buses', (req, res) => {
    res.json(data.buses);
});

//get/api/stops
app.get('/api/stops', (req, res) => {
    res.json(data.stops);
});


app.listen(3000, () => {
    console.log('server started');
})