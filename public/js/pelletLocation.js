function setPelletPosition(pellet, lat, lon) {
  pellet.setPosition(lat, lon);
  pelletArray.push(pellet);
  addCustomMarker(pellet);
}