function setPelletPosition(pellet, lat, lon) {
  pellet.setPosition(lat, lon);
  pelletArray.push(pellet);
  addCustomMarker(pellet.tag, pellet.coordinates.lat, pellet.coordinates.lng, pellet.icon);
}