var dist;

function calculateDistance(obj) {
  var from = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var to = new google.maps.LatLng(obj.coordinates.latitude, obj.coordinates.longitude);
  dist = google.maps.geometry.spherical.computeDistanceBetween(from, to).toFixed(2);
}

function setPelletPosition(pellet, lat, lon) {
  pellet.setPosition(lat, lon);
  pellets.push(pellet);
  addCustomMarker(pellet);
}

function eatPelletChance() {
  if(player.tag == "Pacman") {
    for(i = 0; i < pellets.length; i++) {
    var pellet = pellets[i]
    calculateDistance(pellet)
      if(dist < 2) {
        pellets.pop(pellet);
        matchPelletToMarker(pellet);
      }
      godMode();
      console.log(map.markers);
    }
  }
}

function matchPelletToMarker(pellet) {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i]
    if(marker.position.k.toFixed(6) === pellet.coordinates.latitude.toFixed(6) && marker.position.D.toFixed(6) === pellet.coordinates.longitude.toFixed(6)) {
      map.removeMarker(marker);
    }
  }
}

function matchEnemyToMarker(enemy) {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i]
    if(marker.title == enemy.id) {
      map.removeMarker(marker);
      pwnMsg();
    }
  }
}

function eatsWeak(player) {
  if(player.status == 'invincible') {
    for(i = 0; i < player.enemies.length; i++ ) {
      var enemy = player.enemies[i]
      calculateDistance(enemy);
      if (dist < 2) {
        matchEnemyToMarker(enemy);
      }
    }
  }
}
