// tags must be strings
function removeCustomMarker(tag) {
  map.markers.forEach( function(marker) {
    if(marker.title === tag) {
      map.removeMarker(marker);
    }
  });
}

function addCustomMarker(tag) {
  map.addMarker({
    lat: coords.latitude, 
    lng: coords.longitude,
    title: tag
  });
}