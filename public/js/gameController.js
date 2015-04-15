var player = new Player();
var pellets = [];


$(document).ready(function() {
  listenForEnemyLocation();
  listenForEnemyEscape();
  queryGPStracker();
  setInterval(queryGPStracker, 1000);
});
