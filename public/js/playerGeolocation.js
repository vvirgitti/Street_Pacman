var coords = {
  latitude: undefined,
  longitude: undefined
};

function queryGPStracker() {
  var options = {
    enableHighAccuracy: true
  };
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
}

function updatePlayerLocation(position) {
  setPlayerCoords(position);
  updateMarkerPosition(player);
  broadcastPlayerMovement(player);
  eatPelletChance(player);
  eatsWeak(player);

  map.setCenter(coords.latitude, coords.longitude)
  console.log(player.coordinates);
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
