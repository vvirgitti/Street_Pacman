var Player = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.tag = "player";
  this.icon;
  this.score = 0;
};

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
};
