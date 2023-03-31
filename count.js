const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const text = queryObject.text;
  const count = text.length;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`The text "${text}" has ${count} letters.`);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
//http://localhost:8080/?text=hello%20world