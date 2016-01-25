module.exports = function (grunt) {
    "use strict";
	var path = require('path'),
        nameTask = path.basename(module.filename, '.js');
	/**
    TODO: FIX Moderniz
    grunt.registerTask(nameTask, ['modernizr:dist', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify']);**/
    grunt.registerTask(nameTask, ['concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify']);
};
