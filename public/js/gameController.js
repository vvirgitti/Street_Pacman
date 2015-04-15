var player = new Player();
var pellets = [];

var megaPellet1 = new Pellet();
var megaPellet2 = new Pellet();
var megaPellet3 = new Pellet();
var megaPellet4 = new Pellet();


$(document).ready(function() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
  listenForEnemyLocation();
  listenForEnemyEscape();
  setPelletPosition(megaPellet1, 51.517900, -0.073658);
  setPelletPosition(megaPellet2, 51.516863, -0.074357);
  setPelletPosition(megaPellet3, 51.516978, -0.073092);
  setPelletPosition(megaPellet4, 51.518191, -0.076093);
  queryGPStracker();
  setInterval(queryGPStracker, 1000);
});
