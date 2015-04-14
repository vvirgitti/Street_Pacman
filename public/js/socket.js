// this file contains Socket.io client functions
var socket = io();

socket.on('shake', function(data) {
  if(contains(player.enemies, data) == false) {
    player.enemies.push(data);
  };
});

socket.on('new player location', function(data) {
  updateLocation(data);
});

socket.on('player disconnected', function(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id == data.id ) {
      var i = player.enemies.indexOf(enemy);
      console.log(enemy);
      console.log(player.enemies);
      player.enemies.splice(i, 1);
      console.log(player.enemies);
      removeCustomMarker(enemy);
    }
  });
});

function updateLocation(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id == data.id) {
      enemy.coordinates = data.coordinates;
      removeCustomMarker(enemy);
      addCustomMarker(enemy);
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

function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].id === obj.id) {
      return true;
    }
  }
  return false;
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
