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
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  
  player.getLocation(coords);
  modifyMarkerPosition(player);
  map.setCenter(coords.latitude, coords.longitude);
  
  eatPelletChance();

  console.log(player.coordinates);
}

function startingLocation(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  
  player.getLocation(coords);
  addCustomMarker(player);

  console.log(player.coordinates);
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}
