var express = require('express');
var app = express();

require('./router/main')(app);
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
  app.set('views', __dirname + '/public');
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);

  server.listen(port, function() {
    console.log('server listening on port ' + port)
  });

/* ==================================
  Socket.io logic
=================================== */

  io.on('connection', function(socket) {
    setConnectionLimit(socket);
    console.log(players);
    console.log('user ' + socket.id + ' connected');

    socket.on('player moves', function(player) {
      socket.broadcast.emit('new player location', { id: player.id, coordinates: player.coordinates, icon: player.icon });
    });

    socket.on('disconnect', function() {
      socket.broadcast.emit('player disconnected', { id: socket.id });
      console.log('user ' + socket.id + ' disconnected');
      var i = players.indexOf(socket.id);
      players.splice(i, 1);
      console.log(players);
    });

    socket.on('pwned', function(data) {
      socket.broadcast.emit('player pwned', { id: data.id })
      console.log(data.id + 'pwned');
    });

    socket.on('1337', function(data) {
      console.log(data);
    });

    socket.on('hide icon start game', function(data){
      socket.broadcast.emit('hide icon start');
    });

  });


  function setConnectionLimit(socket) {
    if(players.length < 5) {
      players.push(socket.id);
    } else {
      io.to(socket.id).emit('server full', { answer: 'server is full' })
      console.log('server full');
    }
  }

// ==================================
}

module.exports = server;
