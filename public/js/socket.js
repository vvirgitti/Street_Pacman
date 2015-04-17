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
    console.log('pwning in progress...');
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
    var enemy = player.enemies[i];
    if(enemy.id == data.id) {
      player.enemies.splice(i, 1);
      removeCustomMarker(enemy);
    }
  }
}

function updateEnemyLocation(data) {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i];
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
    coordinates: player.coordinates,
    icon: player.icon,
    status: player.status
  });
}

function broadcastPwnMsg(enemy) {
  socket.emit('pwned', { id: enemy.id });
}

function changePlayerStatus(player) {
  if(player.status == 'weak') {
    player.status = 'invincible';
  } else {
    player.status = 'weak';
  }
}

function listenFor1337() {
  socket.on('player 1337', function(data) {
    changePlayerStatus(player);
    console.log(player.status);
    // setTimeout(changePlayerStatus(player), 60000);
  });
}

function isPwned(data) {
  if(data.id == player.id) {
    clearInterval(geolocQueryLoop);
    removeCustomMarker(player);
    window.location.replace('/lost');
  } else {
    removeEnemy(data);
    youWin(data);
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

function youWin(data) {
  if(player.tag == 'Pacman') {
    if(player.fallenEnemies.length == 4) {
      window.location.replace('/won');
    }
  } else {
    window.location.replace('/won');
  }
}
