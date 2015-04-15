var player = new Player();
var pellets = [];

$(document).ready(function() {
  listenForEnemyLocation();
  listenForEnemyEscape();
  queryGPStracker();
  setTimeout( function() {
    map.setCenter(coords.latitude, coords.longitude)
  }, 2000);
  setInterval(queryGPStracker, 1000);
});
