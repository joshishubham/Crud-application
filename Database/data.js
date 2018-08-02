var mongoose = require('mongoose');
var data = mongoose.Schema({
	 Name: String,
	 Email: String,
	 Mobile : Number,
	 Address: String
}); 
var cruds = module.exports = mongoose.model("cruds", data);