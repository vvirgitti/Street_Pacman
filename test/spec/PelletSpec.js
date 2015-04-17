describe('Pellet', function() {
  var pellet = new Pellet();
  var lat, lon;

  describe('internal testing', function() {

    it('can be positioned', function() {
      lat = 51.5;
      lon = 3.5;

      pellet.setPosition(lat, lon);
      expect(pellet.coordinates).toEqual({latitude: lat, longitude: lon});
    });
  });
});
