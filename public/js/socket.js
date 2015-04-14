// this file contains Socket.io client functions
var socket = io();

function connectToServer() {
  socket.on('connect', function(data) {
    // console.log(data);
    setTimeout(newPlayerInit(player), 5000);
  });
}

socket.on('shake', function(data) {
  console.log(data);
  player.enemies.push(data);
  enemyPosition(data);
});

socket.on('new player location', function(data) {
  updateLocation(data);
});

socket.on('player disconnected', function(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id === data.id ) {
      player.enemies.pop(enemy);
      removeCustomMarker(enemy);
    }
  });
});

function updateLocation(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id === data.id) {
      enemy.coordinates = data.coordinates;
      modifyMarkerPosition(enemy);
    }
  });
  console.log(player.enemies);
}

function playerMovement(player) {
  socket.emit('player moves', { 
    id: socket.id, 
    coordinates: { 
      latitude: player.coordinates.latitude, 
      longitude: player.coordinates.longitude 
    }
  });
}

function newPlayerInit(player) {
  player.id = socket.id;
  socket.emit('hello world', { id: player.id, coordinates: player.coordinates });
}

/////
// SERVER
// socket.on('clientMove', function(data){
//   sockets.broadcast('move', { id: socket.id, data: coordinates })
// })


// socket.on('connection', addSocket)

// var connections = []

// function addSocket() {
//   connections.push(socket.id)
// }

// client connects -> client registers itself with server -> server records client

// server tells other connected clients "we have a new client called xxx" -> clients receive and update their object list

// client moves -> client sends data to server -> server updates all clients

// server tells other connected clients "we have new data from xxx" -> clients receive and update their object list
