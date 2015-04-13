var express = require('express');
var app = express();
var server = require('http').createServer(app);
var throng = require('throng');
var port = process.env.PORT || 3000;
var WORKERS = process.env.WEB_CONCURRENCY || 1;
var io = require('socket.io')(server);

app.use(express.static('public'));

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {

  app.get('/', function(req, res) {
    res.sendFile('index.html');
  });

  io.on('connection', function(socket) {
    socket.emit('hello world', { msg: 'hello world' });
    socket.on('w00t', function(msg) {
      console.log(msg);
    });
  });

  server.listen(port, function() {
    console.log('server listening on port ' + port)
  });
}

module.exports = server;