var Player = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.id;
  this.icon = '../images/mini_Pacman.png';
  this.score = 0;
  this.enemies = [];
};

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
};
