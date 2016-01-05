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
  
  var newUser = new User({
	  username: 'jerry275',
	  password: '123',
	  favorites: ['horseback riding']
	});
  newUser.save();
});

app.get('/api/users/favorites/:username', function(req, res){
  // var username = req.params.username;
  var username = 'nick'
  User.findOne({ 'username': username }).then(function(person){
  	if (person){
  		res.send(200, person.favorites)
  	}
  });
  
});

app.post('/api/users/favorites', function(req, res){
  var favorite = req.body.favorite;
  var username = 'nick'
  User.findOne({ 'username': username }).then(function(person){
  	if (person){
  		person.favorites.push(favorite);
  		person.save();
  	}
  });
  
});

app.get('/api/users/locations/:username', function(req, res){
  // var username = req.params.username;
  var username = 'nick'
  User.findOne({ 'username': username }).then(function(person){
  	if (person){
  		res.send(200, person.locations);
  	}
  });
  
});

app.post('/api/users/locations', function(req, res){
  var zip = req.body.zip;
  var username = 'nick'
  User.findOne({ 'username': username }).then(function(person){
  	if (person){
  		person.locations.push(zip);
  		person.save();
  	}
  });
  
});


app.get('/api/users', function(req, res){
  User.find({}).exec(function(err, users){
  	if (users){
  		res.send(200, users);
  	} else {
  		res.send(500);
  	}
  });
  
});



app.listen(PORT, function(){
	console.log("Express listening on port " + PORT);
})
