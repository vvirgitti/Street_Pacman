function setPelletPosition(pellet, lat, lon) {
  pellet.setPosition(lat, lon);
  pellets.push(pellet);
  addCustomMarker(pellet);
}