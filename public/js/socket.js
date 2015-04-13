// this file contains Socket.io client functions
var socket = io.connect('http://localhost:3000');

socket.on('hello world', function(data) {
  player.enemies.push(data);
  console.log(data);
  updateLocation(data);
});

socket.on('new player location', function(data) {
  updateLocation(data);
});

function updateLocation(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.userId === data.id) {
      enemy.coordinates = data.coordinates;
    }
  });
  console.log(player.enemies);
}

function playerMovement(socket, player) {
  socket.emit('player moves', { 
    id: player.id, 
    coordinates: { 
      latitude: player.coordinates.latitude, 
      longitude: player.coordinates.longitude 
    }
  });
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
