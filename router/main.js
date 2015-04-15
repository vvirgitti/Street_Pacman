module.exports=function(app) {
  // app.get('/', function(req,res){
  //   res.render('index.html')
  // });

  var bodyParser = require('body-parser');
  // var multer = require('multer');

  app.use(bodyParser.urlencoded({extended: true}));
  // app.use(multer());

  app.route('/')
  .get(function(req,res){
    res.render('index.html');
  })
  .post(function(req, res){
    res.send('New Game');
  });

  app.get('/game', function(req, res){
    console.log(req.body);
    res.render('game.html')
  });

  app.post('/game', function(req, res){
    res.render('game.html')
  });

  app.get('/choose', function(req, res){
    res.render('choose.html')
  });

  app.post('/choose', function(req, res){
    res.render('choose.html')
  });

}
