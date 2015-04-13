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

    socket.on('hello world', function(data) {
      players.push(data);
      console.log('user connected');
      players.forEach( function(data) {
        socket.broadcast.emit('shake', { id: data.id, coordinates: data.coordinates });
      });
    });

    io.on('disconnection', function(data) {
      players.forEach( function(player) {
        if(player.id === data.id) {
          players.pop(player)
          console.log('player disconnected');
        };
      });
    })

    socket.on('player moves', function(data) {
      socket.broadcast.emit('new player location', { id: data.id, coordinates: data.coordinates })
      console.log('user has moved');
    });
  }); 

// ==================================
}

function addNewPlayer(player) {
  players.push(player)
}

module.exports = server;
