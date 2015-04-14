var player = new Player();
// var pellet1 = new Pellet();
// var pellet2 = new Pellet();
var pellets = [];

function pelletLocator() {
  setPelletPosition(pellet1, 51.517687, -0.0734060);
  setPelletPosition(pellet2, 51.513621, -0.0721043);
}

$(document).ready(function() {
  getStartingLocation();
  // pelletLocator();
  // initPlayerLocation();
  setInterval(queryGPStracker, 2000);
});
