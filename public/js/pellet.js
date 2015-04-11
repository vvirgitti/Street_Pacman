var Pellet = function() {
  this.coordinates = {
    lat: undefined,
    lng: undefined
  }
};

Pellet.prototype.setPosition = function(lat, lon) {
  this.coordinates.lat = lat;
  this.coordinates.lng = lon;
};
