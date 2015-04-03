var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo response from server\r\n');
  socket.pipe(socket);
});

server.listen(80);
