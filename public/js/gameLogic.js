var dist;

function calculateDistance(pellet) {
  var from = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var to = new google.maps.LatLng(pellet.coordinates.lat, pellet.coordinates.lng);
  dist = google.maps.geometry.spherical.computeDistanceBetween(from, to).toFixed(2);
}

function setPelletPosition(pellet, lat, lon) {
  pellet.setPosition(lat, lon);
  pellets.push(pellet);
  addCustomMarker(pellet);
}

function eatPelletChance() {
  pellets.forEach( function(pellet) {
    calculateDistance(pellet)
    if(dist < 2) {
      pellets.pop(pellet);
      matchPelletToMarker(pellet);
      updateScore();
    };
  });
  console.log(map.markers);
}

function matchPelletToMarker(pellet) {
  map.markers.forEach(function(marker) {
    if(marker.position.k.toFixed(6) === pellet.coordinates.lat.toFixed(6) && marker.position.D.toFixed(6) === pellet.coordinates.lng.toFixed(6)) {
      map.removeMarker(marker);
    };
  });
}

function updateScore() {
  player.score += 10;
  $('#score').text( function() {
    return "Score: " + player.score
  });
}
