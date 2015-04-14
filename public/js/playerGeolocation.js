var coords = {
  latitude: undefined,
  longitude: undefined
};

var options = {
  enableHighAccuracy: true
};

function getStartingLocation() {
  navigator.geolocation.getCurrentPosition(startingLocation, errorCallback, options);
}

function queryGPStracker() {
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
}

function startingLocation(position) {
  setPlayerCoords(position);
  addCustomMarker(player);
  map.setCenter(coords.latitude, coords.longitude);

  console.log(player.coordinates);
}

function updatePlayerLocation(position) {
  setPlayerCoords(position);
  removeCustomMarker(player)
  addCustomMarker(player);
  map.setCenter(coords.latitude, coords.longitude);

  console.log(player.coordinates);
  playerMovement(player);
  console.log(map.markers);
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}

function setPlayerCoords(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  player.getLocation(coords);
}
