var pellet = new Pellet();
var lat = 51.517687;
var lon = -0.0734060;

$(document).ready(function() {
  setPelletPosition(lat, lon);
});

function setPelletPosition(lat, lon) {
  pellet.setPosition(lat, lon);

  addCustomMarker(pellet.tag, pellet.coordinates.lat, pellet.coordinates.lng, pellet.icon);
}