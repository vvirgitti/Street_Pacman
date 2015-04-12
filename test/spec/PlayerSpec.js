describe('Player', function() {
  var player = new Player();
  var gpsTracker = jasmine.createSpyObj('gpsTracker', ['geolocatePlayer'])
  var location = {
    latitude: 51.5,
    longitude: 3.5
  };

  describe('internal testing', function() {

    beforeEach( function() {
      gpsTracker = {
        geolocatePlayer: function(location) {
          player.getLocation(location)        
        }
      };
    });

    it('should be able to get its location from the GPS', function() {
      gpsTracker.geolocatePlayer(location);
      expect(player.coordinates).toEqual(location);
    });
  });
});