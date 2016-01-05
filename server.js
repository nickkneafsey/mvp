var User = require('./db.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', express.static('client'));


mongoose.connect('mongodb://localhost/eventer');


app.post('/api/users', function(req, res){
  //find username
  //console.log(req);
  var newUser = new User({
	  username: 'jerry275',
	  password: '123',
	  favorites: ['horseback riding']
	});
  newUser.save();
});

app.post('/api/users/favorites', function(req, res){
  var favorite = req.body.favorite;
  User.findOne({ 'username': 'nick' }).then(function(person){
  	if (person){
  		person.favorites.push(favorite);
  		person.save();
  	}
  });
  
});

app.get('/api/users', function(req, res){
  // var favorite = "scuba diving";
  User.find({}).exec(function(err, users){
  	if (users){
  		res.send(200, users);
  	} else {
  		res.send(500);
  	}
  });
  
  
});


 // app.get('/events', function(req, res) {
 //    res.sendfile('./client/index.html'); 
 // });

app.listen(PORT, function(){
	console.log("Express listening on port " + PORT);
})
