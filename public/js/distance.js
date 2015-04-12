
  var from = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var to   = new google.maps.LatLng(pellet.coordinates.lat, pellet.coordinates.lng);
  var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to).toFixed(2);
  console.log(player.coordinates.laitude);
  console.log(pellet.coordinates.lat);
  console.log(dist);