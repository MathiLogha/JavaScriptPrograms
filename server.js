// server.js

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');
  socket.write('Server connected\r\n');

  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);

    socket.write(`Message: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
  
});


server.listen(8080, () => {
  console.log('Server listening.');
});
