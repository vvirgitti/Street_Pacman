// this file contains Socket.io client functions
var socket = io();

socket.on('new player location', function(data) {
  checkForEnemyRedundancy(data);
  updateEnemyLocation(data);
});

socket.on('player disconnected', function(data) {
  removeEnemy(data);
});

function removeEnemy(data) {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i] 
    if(enemy.id == data.id) {
      player.enemies.splice(i, 1);
      removeCustomMarker(enemy);
    }
  }
}

function updateEnemyLocation(data) {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i] 
    if(enemy.id == data.id) {
      enemy.coordinates = data.coordinates;
      updateMarkerPosition(enemy);
    }
  }
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

function checkForEnemyRedundancy(data) {
  if(contains(player.enemies, data) == false) {
    player.enemies.push(data);
  };
}

function contains(array, obj) {
  var i = array.length;
  while (i--) {
    if (array[i].id === obj.id) {
      return true;
    }
  }
  return false;
}
