module.exports = function (grunt) {
	var path = require('path'),
			nameTask = path.basename(module.filename, '.js');

	grunt.registerTask(nameTask, ['copy', 'json-minify']);
};