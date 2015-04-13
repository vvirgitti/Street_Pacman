var Player = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.tag = "player";
  this.icon = '../images/mini_Pacman.png';
  this.score = 0;
  this.userId;
  this.enemies = [];
};

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
};
