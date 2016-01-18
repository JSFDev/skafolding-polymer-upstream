var fs = require('fs');
var http = require('http');

function serveStatic (file, callback) {
	fs.readFile('www/' + file, function (err, data) {
		if (err) {
		return callback(err);
	}
	callback(err, data.toString());	
	})	
}

var server = http.createServer(function (request, response) {
	console.log('Request: ' + request.url);

	switch (request.url) {
		case '/':
			serveStatic('index.html', function (err, content) {
				response.end(content);
			});
			break
		default:
			response.statusCode = 404;
			response.end('Not found');
			break
	}
});

server.listen(3000, function () {
	console.log('Servidor iniciado. Escuchando por el puerto 3000');
})