var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitterati', function(){
	console.log('mongodb connected')
});

module.exports = mongoose;