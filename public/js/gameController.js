var player = new Player();
var pellet1 = new Pellet();
var pellet2 = new Pellet();
var pellets = [];
var lat1 = 51.517687;
var lon1 = -0.0734060;
var lat2 = 51.513621;
var lon2 = -0.0721043;


$(document).ready(function() {
  initPlayerLocation();
  setPelletPosition(pellet1, lat1, lon1);
  setPelletPosition(pellet2, lat2, lon2);
  setInterval(queryGPStracker, 2000);
});

function eatPelletChance() {
  pellets.forEach( function(pellet) {
    calculateDistance(pellet)
    if(dist < 2) {
      pelletArray.pop(pellet);
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
