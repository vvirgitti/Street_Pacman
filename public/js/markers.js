// tags must be strings
function removeCustomMarker(tag) {
  map.markers.forEach( function(marker) {
    if(marker.title === tag) {
      map.removeMarker(marker);
    }
  });
}

function addCustomMarker(object) {
  map.addMarker({
    lat: object.coordinates.latitude,
    lng: object.coordinates.longitude,
    title: object.tag,
    icon: object.icon,
  });
}

function modifyMarkerPosition(object) {
  map.markers.forEach( function(marker) {
    if(marker.tag === object.tag) {
      marker.position.k = object.coordinates.latitude
      marker.position.D = object.coordinates.longitude
    }
  });
}