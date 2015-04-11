var Pellet = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  }
};

Pellet.prototype.setPosition = function(lat, lon) {
  this.coordinates.latitude = lat;
  this.coordinates.longitude = lon;
};
