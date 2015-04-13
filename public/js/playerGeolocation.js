var coords = {
  latitude: undefined,
  longitude: undefined
};

var options = {
  enableHighAccuracy: true
};

function queryGPStracker() {
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
}

function initPlayerLocation() {
  navigator.geolocation.getCurrentPosition(startingLocation, errorCallback, options);
}

function updatePlayerLocation(position) {
  setPlayerCoords(position);
  modifyMarkerPosition(player);
  map.setCenter(coords.latitude, coords.longitude);
  
  eatPelletChance();

  console.log(player.coordinates);
  playerMovement(player);
}

function startingLocation(position) {
  setPlayerCoords(position);
  addCustomMarker(player);

  console.log(player.coordinates);
  playerMovement(player);
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}

function setPlayerCoords(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  player.getLocation(coords);
}

