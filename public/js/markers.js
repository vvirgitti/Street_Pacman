// tags must be strings
function removeCustomMarker(tag) {
  map.markers.forEach( function(marker) {
    if(marker.title === tag) {
      map.removeMarker(marker);
    }
  });
}

function addCustomMarker(tag, lat, lon) {
  map.addMarker({
    lat: lat, 
    lng: lon,
    title: tag
  });
}