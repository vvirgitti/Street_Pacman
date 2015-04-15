var Pellet = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.id;
  this.icon = '../images/pellets_small.png';
};

Pellet.prototype.setPosition = function(lat, lon) {
  this.coordinates.latitude = lat;
  this.coordinates.longitude = lon;
};
