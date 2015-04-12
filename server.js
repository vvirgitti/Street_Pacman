var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

server.listen(3000, function() {
  console.log('server listening on port 3000')
});
