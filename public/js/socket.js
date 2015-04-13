// this file contains Socket.io client functions
var socket = io.connect('http://localhost:3000');

socket.on('hello world', function(msg) {
  console.log(msg);
  socket.emit('w00t', { txt: 'w00t'})
});
