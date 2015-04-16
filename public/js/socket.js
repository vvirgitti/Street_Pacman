// this file contains Socket.io client functions,
// methods preceded by "listenFor" or "broadcast" in other files are strictly socket.io methods
var socket = io();

socket.on('server full', function(data) {
  console.log(data.answer);
});

socket.on('connect', function() {
  player.id = socket.id;
});

function listenForPwning() {
  socket.on('player pwned', function(data) {
    console.log('pwning in progress...')
    console.log(player.status)
    isPwned(data);
  });
}

function listenForEnemyLocation() {
  socket.on('new player location', function(data) {
    checkForEnemyRedundancy(data);
    checkForUndefId();
    if(contains(player.fallenEnemies, data) == false && contains(player.enemies, data) == true) {
      updateEnemyLocation(data);
    }
  });
}

function listenForEnemyEscape() {
  socket.on('player disconnected', function(data) {
    removeEnemy(data);
  });
}

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
      enemy.icon = data.icon;
      updateMarkerPosition(enemy);
    }
  }
}

function broadcastPlayerMovement(player) {
  // this function is called in the playerGeolocation.js file,
  // every time a GPS tracker query is sent
  socket.emit('player moves', {
    id: socket.id,
    coordinates: {
      latitude: player.coordinates.latitude,
      longitude: player.coordinates.longitude
    },
    icon: player.icon,
    status: player.status
  });
}

function broadcastPwnMsg(enemy) {
  socket.emit('pwned', { id: enemy.id });
}

function broadcast1337(player) {
  socket.emit('1337', { id: player.id, status: player.status });
}

function broadcastRevertStatus(player) {
  socket.emit('revert to default', {id: player.id, status: player.status})
}

function listenForEndOf1337() {
  socket.on('end of 1337', function(data) {
    changePlayerStatus(data);
    // changeEnemyStatus(data);
  });
}

function changePlayerStatus(data) {
  if(player.id == data.id && player.status == 'weak') {
    player.status = 'invincible';
  } else {
    player.status = 'weak';
  }
}

function listenFor1337() {
  socket.on('player 1337', function(data) {
    changePlayerStatus(data);
  });
}

function isPwned(data) {
  if(data.id == player.id) {
    clearInterval(geolocQueryLoop);
    removeCustomMarker(player);
    alert("you've been pwned!!!");
  } else {
    removeEnemy(data);
  }
}

function checkForUndefId() {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i];
    if(enemy.id == undefined) {
      player.enemies.splice(i, 1);
    }
  }
}

function checkForEnemyRedundancy(data) {
  if(contains(player.enemies, data) == false && contains(player.fallenEnemies, data) == false) {
    player.enemies.push(data);
  } else {
    var i = player.enemies.indexOf(data);
    player.enemies.splice(i, 1);
  }
}

function contains(array, obj) {
  var i = array.length;
  while (i--) {
    if (array[i].id == obj.id) {
      return true;
    }
  }
  return false;
}

function broadcastPlayerChosen(iconName) {
  socket.emit('hide character icon', { icon: iconName });
}

function checkForDuplicateMarker() {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i];
    if(marker.title == undefined ) {
      map.removeMarker(marker);
    }
  }
}

function listenForChosenCharacter() {
  socket.on('hide chosen character icon', function(data) {
    hide(data.icon);
  });
}
