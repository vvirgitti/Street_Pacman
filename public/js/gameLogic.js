function eatPelletChance() {
  pellets.forEach( function(pellet) {
    calculateDistance(pellet)
    if(dist < 2) {
      pellets.pop(pellet);
      matchPelletToMarker(pellet);
      updateScore();
    };
  });
  console.log(pellets)
  console.log(map.markers)
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
