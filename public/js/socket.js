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
    icon: player.icon
  });
}

function broadcastPwnMsg(enemy) {
  socket.emit('pwned', { id: enemy.id });
}

function broadcast1337() {
  socket.emit('1337', '1337');
}

function isPwned(data) {
  console.log(data.id)
  console.log(player.id)
  if(data.id == player.id) {
    clearInterval(geolocQueryLoop);
    removeCustomMarker(player);
  } else {
    removeEnemy(data);
  }
};

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


function hideIcon() {
  socket.on('hide icon start', function(name){
    hide(name);
  });
}
