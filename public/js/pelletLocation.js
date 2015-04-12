var pellet = new Pellet();
var lat = 51.5;
var lon = -0.03;

$(document).ready(function() {
  setPelletPosition(lat, lon);
});

function setPelletPosition(lat, lon) {
  pellet.setPosition(lat, lon);
  
  addCustomMarker(pellet.tag, pellet.coordinates.lat, pellet.coordinates.lng);
}