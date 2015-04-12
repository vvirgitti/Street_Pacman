var player = new Player();
var pellet = new Pellet();
var lat = 51.517687;
var lon = -0.0734060;

$(document).ready(function() {
  geolocatePlayer();
  setInterval(geolocatePlayer, 3000);
  setPelletPosition(lat, lon);
  setInterval(calculateDistance, 5000);
});