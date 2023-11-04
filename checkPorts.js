const net = require('net');

const portToCheck = 3000; // Replace with the port you want to check

const server = net.createServer();

server.listen(portToCheck, '127.0.0.1');

server.on('listening', () => {
    console.log(`Port ${portToCheck} is in use.`);
    server.close();
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${portToCheck} is NOT in use.`);
    } else {
        console.log(err);
    }
});