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
  _.forEach(player.enemies, function(enemy) {
    if(enemy.id == data.id ) {
      _.pull(player.enemies, enemy);
      console.log(enemy);
      removeCustomMarker(enemy);
    }
  });
}

function updateEnemyLocation(data) {
  _.forEach(player.enemies, function(enemy) {
    if(enemy.id == data.id) {
      enemy.coordinates = data.coordinates;
      updateMarkerPosition(enemy);
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
