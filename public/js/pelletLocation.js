var pellet = new Pellet();
var lat = 51.5;
var lon = -0.03;

$(document).ready(function() {
  setPelletPosition(lat, lon);
});

function setPelletPosition(lat, lon) {
  pellet.setPosition(lat, lon)
  
  map.addMarker({
    lat: pellet.coordinates.lat,
    lng: pellet.coordinates.lng,
    title: "pellet marker"
  });
};