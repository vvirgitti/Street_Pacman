var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var port = process.env.PORT || 3000;

server.listen(3000, function() {
  console.log('server listening on port 3000')
});

module.exports = server;