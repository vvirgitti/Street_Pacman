var Player = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.tag = "player";
  this.icon = 'http://s1.postimg.org/psw7lnca3/mini_Pacman.png';
};

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
};