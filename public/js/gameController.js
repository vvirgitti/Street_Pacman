var player = new Player();
var pellets = [];

var megaPellet1 = new Pellet();

$(document).ready(function() {
  setIcon();
  listenForEnemyLocation();
  listenForEnemyEscape();
  setPelletPosition(megaPellet1, 51.517900, -0.073658);
  queryGPStracker();
  setInterval(queryGPStracker, 1000);
});
