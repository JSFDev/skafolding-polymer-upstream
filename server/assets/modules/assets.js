var fs = require('fs');

module.exports.serveStatic = function serveStatic (file, callback) {
	fs.readFile('client/' + file, function (err, data) {
		console.log(data);
		if (err) { return callback(err); }
		callback(err, data.toString());			
	});	
}