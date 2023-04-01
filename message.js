// const net = require('net');

// const client = new net.Socket();

// client.connect(3000, 'localhost', () => {
//   console.log('Connected to server');
// });

// // send message to server dynamically
// process.stdin.on('data', (data) => {
//   client.write(data.toString());
// });

// client.on('data', (data) => {
//   console.log(`Received data from server: ${data}`);
// });

// client.on('close', () => {
//   console.log('Connection closed');
// });
