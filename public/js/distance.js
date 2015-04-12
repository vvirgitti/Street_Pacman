var dist;

function calculateDistance(pellet) {
  var from = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var to   = new google.maps.LatLng(pellet.coordinates.lat, pellet.coordinates.lng);
  dist = google.maps.geometry.spherical.computeDistanceBetween(from, to).toFixed(2);
}