// tags must be strings
function removeCustomMarker(object) {
  map.markers.forEach( function(marker) {
    if(marker.title === object.tag) {
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

function modifyMarkerPosition(object) {
  map.markers.forEach( function(marker) {
    if(marker.tag === object.id) {
      marker.position.k = object.coordinates.latitude
      marker.position.D = object.coordinates.longitude
    }
  });
}