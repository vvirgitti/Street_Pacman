describe('Pellet', function() {
  var pellet = new Pellet();
  var lat, lon;

  it('can be positioned', function() {
    lat = 51.5;
    lon = 3.5;

    pellet.setPosition(lat, lon);
    expect(pellet.coordinates).toEqual({latitude: 51.5, longitude: 3.5})
  });

});