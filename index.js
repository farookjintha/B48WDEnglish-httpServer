

// Install/Import the necessary package to create a server; ie: http
const http = require('http');

// Write code/logic to create the server.
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, Hope you are doing good!');
});

// Expose the server so that some one can access it.
const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
})

// HTTP -> it's a protocol, req/res 