const express = require('express');
var cors = require('cors')
const data = require('./data.json');
const port = process.env.PORT || 3000

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

// put / api / buses /distance
app.put('/api/buses/distance'), (req, res) => {
    const { busId, distance } = req.body;
    const bus = data.buses.find(bus => bus.id === busId);
    bus.distance = distance;
    res.json(bus);
}


app.listen(port, () => {
    console.log('server started');
})