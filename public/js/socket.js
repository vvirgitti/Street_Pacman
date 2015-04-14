// this file contains Socket.io client functions
var socket = io();

socket.on('shake', function(data) {
  if(contains(player.enemies, data) == false) {
    player.enemies.push(data);
  };
});

socket.on('new player location', function(data) {
  updateEnemyLocation(data);
});

socket.on('player disconnected', function(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id == data.id ) {
      var i = player.enemies.indexOf(enemy);
      player.enemies.splice(i, 1);
      removeCustomMarker(enemy);
    }
  });
});

function updateEnemyLocation(data) {
  player.enemies.forEach( function(enemy) {
    if(enemy.id == data.id) {
      enemy.coordinates = data.coordinates;
      removeCustomMarker(enemy);
      addCustomMarker(enemy);
    }
  });
  console.log(player.enemies);
}

function broadcastPlayerMovement(player) {
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
