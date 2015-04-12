function setPelletPosition(lat, lon) {
  pellet.setPosition(lat, lon);

  addCustomMarker(pellet.tag, pellet.coordinates.lat, pellet.coordinates.lng, pellet.icon);
}