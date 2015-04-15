var player = new Player();
var pellets = [];

$(document).ready(function() {
  queryGPStracker();
  setTimeout( function() {
    map.setCenter(coords.latitude, coords.longitude)
  }, 2000);
  setInterval(queryGPStracker, 1000);
});
