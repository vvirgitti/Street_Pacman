var player = new Player();
var pellets = [];

var megaPellet1 = new Pellet();


$(document).ready(function() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
  listenForEnemyLocation();
  listenForEnemyEscape();
  setPelletPosition(megaPellet1, 51.517900, -0.073658);
  queryGPStracker();
  setInterval(queryGPStracker, 1000);
});
