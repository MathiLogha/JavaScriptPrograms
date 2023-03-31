// client.js

const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Connected to server.');

  client.write('Server');
});
client.on('data', (data) => {
  console.log(`Message: ${data}`);
});
client.on('end', () => {
  console.log('Server disconnected.');
});

