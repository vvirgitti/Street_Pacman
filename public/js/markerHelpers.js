function removeCustomMarker(object) {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i]
    if(marker.title == object.id) {
      map.removeMarker(marker);
    }
  }
}

function addCustomMarker(object) {
  map.addMarker({
    lat: object.coordinates.latitude,
    lng: object.coordinates.longitude,
    title: object.id,
    icon: object.icon
  });
}

function updateMarkerPosition(player) {
  removeCustomMarker(player);
  addCustomMarker(player);
}