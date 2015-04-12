var player = new Player();
var pellet = new Pellet();
var lat = 51.517687;
var lon = -0.0734060;

$(document).ready(function() {
  geolocatePlayer();
  setInterval(geolocatePlayer, 3000);
  setPelletPosition(lat, lon);
  appendScore();
  setInterval(eatPellet, 5000);
});

function eatPellet() {
  calculateDistance();
  if(dist < 40) { 
    removeCustomMarker(pellet.tag);
    player.score += 1;
    console.log(player.score);
  };
}

function appendScore() {
  $('#score').text( function() {
    return "Score:" + player.score
  });
}
