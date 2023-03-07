const http = require('http');
const port = process.env.PORT || 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(
    'Hello World! My name is hello-world-test and my owner is faisallarai'
  );
};

const server = http.createServer(requestListener);
server.listen(port);
