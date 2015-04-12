var express = require('express');
var app = express();
var server = require('http').createServer(app);
var throng = require('throng');
var port = process.env.PORT || 3000;
var WORKERS = process.env.WEB_CONCURRENCY || 1;

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {
  app.use(express.static('public'));

  app.get('/', function(req, res) {
    res.sendFile('index.html');
  });

  server.listen(port, function() {
    console.log('server listening on port ' + port)
  });
}

module.exports = server;