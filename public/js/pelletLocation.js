var pellet = new Pellet();
var lat = 51.5;
var lon = -0.3;
var pelletMarkers = [];

$(document).ready(function() {
  setPelletPosition();
});

function setPelletPosition() {
  pellet.setPosition(lat, lon)
  pelletMarkers.push(pellet.coordinates)

  pelletMarkers.forEach( function(marker) {
    map.addMarkers(marker);
  });

  console.log(pellet) 
};