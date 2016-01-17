module.exports = function (grunt) {
	var path = require('path'),
			nameTask = path.basename(module.filename, '.js');

	grunt.registerTask(nameTask, ['concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify']);
};