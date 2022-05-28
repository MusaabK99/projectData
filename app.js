const http = require('http');
const port = process.env.PORT || 3000
const data = require('./data.json');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

//send data to the client
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});


server.listen(port, () => {
    console.log(`Server running at port ` + port);
});