var player = new Player();
var pellets = [];


$(document).ready(function() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
  listenForEnemyLocation();
  listenForEnemyEscape();
  queryGPStracker();
  setInterval(queryGPStracker, 1000);
});
