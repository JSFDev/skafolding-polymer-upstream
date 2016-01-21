var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/test', function (req, res) {
	res.json([])
})

app.post('/test/:id', function (req, res) {
	res.json([])
})

app.listen(3000, function () {
	console.log('Servidor iniciando con Express en el puerto 3000')
})