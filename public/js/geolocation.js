var coords = {
  latitude: undefined,
  longitude: undefined
};

var player = new Player();

function geolocatePlayer() {
  navigator.geolocation.getCurrentPosition(updatePlayerLocation);
};

GMaps.geolocate({
  success: function(position) {
    coords.latitude = position.coords.latitude
    coords.longitude = position.coords.longitude

    player.getLocation(coords);
    map.addMarker({
      lat: coords.latitude, 
      lng: coords.longitude
    });
    map.setCenter(position.coords.latitude, position.coords.longitude);
  },
  error: function(error) {
    alert('Geolocation failed: '+error.message);
  },
  not_supported: function() {
    alert("Your browser does not support geolocation");
  },
  always: function() {
    alert("Done!");
  }
});

function updatePlayerLocation(position) {
  coords.latitude = position.coords.latitude
  coords.longitude = position.coords.longitude

  player.getLocation(coords);
  
  map.setCenter(coords.latitude, coords.longitude)
};
