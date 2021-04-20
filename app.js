const http = require('http');
const fs = require('fs');
const port = 5000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello, Node Server Is Running');
    res.end();
  }
});

server.listen(port, error => {
  if (error) {
    console.log("Error Present", error)
  } else {
    console.log("Server is listening on port " + port)
  }
});