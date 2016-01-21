var fs = require('fs');
var http = require('http');
var assets = require('./assets/modules/assets.js');

var server = http.createServer(function (request, response) {
	console.log('Request: ' + request.url);

	switch (request.url) {
		case '/':
			assets.serveStatic('index.html', function (err, content) {
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
});