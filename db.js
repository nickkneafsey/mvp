var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	favorites:{
		type: Array
	}
});

var User = mongoose.model('User', userSchema);
module.exports = User;

// users.insert(
   
//    {
//      username: 'nick',
//      password: 'abc',
//      favorites: ['basketball']
//    }
// )