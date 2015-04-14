function enemyPosition(data) {
  map.addMarker({
    lat: data.coordinates.latitude,
    lng: data.coordinates.longitude,
    title: data.id
  });
}