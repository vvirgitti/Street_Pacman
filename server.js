var express = require('express');
var app = express();
var server = require('http').createServer(app);
var throng = require('throng');
var port = process.env.PORT || 3000;
var WORKERS = process.env.WEB_CONCURRENCY || 1;
var io = require('socket.io')(server);
var players = [];
var coords = {
  latitude: undefined,
  longitude: undefined
};

app.use(express.static('public'));

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {

  app.get('/', function(req, res) {
    res.sendFile('index.html');
  });

  server.listen(port, function() {
    console.log('server listening on port ' + port)
  });

/* ==================================
  Socket.io logic
=================================== */

  io.on('connection', function(socket) {
    players.push(socket.id);
    console.log(players);
    console.log('user ' + socket.id + ' connected');

    socket.on('player moves', function(player) {
      socket.broadcast.emit('shake', { id: player.id, coordinates: player.coordinates });
      socket.broadcast.emit('new player location', { id: player.id, coordinates: player.coordinates });
    });

    socket.on('disconnect', function() {
      socket.broadcast.emit('player disconnected', { id: socket.id });
      console.log('user ' + socket.id + ' disconnected');
      var i = players.indexOf(socket.id);
      players.splice(i, 1)
      console.log(players);
    });
  });

// ==================================
}

module.exports = server;
