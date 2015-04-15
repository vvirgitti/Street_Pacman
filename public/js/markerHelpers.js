// tags must be strings
function removeCustomMarker(object) {
  map.markers.forEach( function(marker) {
    if(marker.title == object.id) {
      map.removeMarker(marker);
    }
  });
}

function addCustomMarker(object) {
  map.addMarker({
    lat: object.coordinates.latitude,
    lng: object.coordinates.longitude,
    title: object.id,
    icon: object.icon,
  });
}

function updateMarkerPosition(player) {
  removeCustomMarker(player);
  addCustomMarker(player);
}