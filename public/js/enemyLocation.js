function enemyPosition() {
  player.enemies.forEach( function(enemy) {
    map.addMarker({
      lat: enemy.coordinates.latitude,
      lng: enemy.coordinates.longitude,
      tag: enemy.id
    });
  });
}