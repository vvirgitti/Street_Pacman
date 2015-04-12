var player = new Player();
var pellet = new Pellet();
var pellet2 = new Pellet();
var pelletArray = [];
var lat = 51.517687;
var lon = -0.0734060;
var lat1 = 51.513621;
var lon1 = -0.0721043;


$(document).ready(function() {
  geolocatePlayer();
  setInterval(geolocatePlayer, 3000);
  setPelletPosition(pellet, lat, lon);
  setPelletPosition(pellet2, lat1, lon1);
  setInterval(eatPellet, 5000);
});

function eatPellet() {
  pelletArray.forEach( function(pt) {
    console.log(pelletArray)
    calculateDistance(pt)
    if(dist < 2) {
      pelletArray.pop(pt);
      matchPelletToMarker(pt);
      updateScore();
    };
  });
  console.log(map.markers)
}

function matchPelletToMarker(pt) {
  map.markers.forEach(function(marker) {
    if(marker.position.k.toFixed === pt.coordinates.lat.toFixed && marker.position.D.toFixed(6) === pt.coordinates.lng.toFixed(6)) {
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
