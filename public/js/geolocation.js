var coords = {
  latitude: undefined,
  longitude: undefined
};

var options = {
  enableHighAccuracy: true
};

function updatePlayerLocation() {
  navigator.geolocation.getCurrentPosition(updateLocation, errorCallback, options);
}

function updateLocation(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  player.getLocation(coords);

  modifyMarkerPosition(player);
  console.log(player.coordinates);
  eatPellet();
}

function initPlayerLocation() {
  navigator.geolocation.getCurrentPosition(playerLocation, errorCallback, options);
}

function playerLocation(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;

  player.getLocation(coords);
  console.log(player.coordinates);
  addCustomMarker(player)
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}
