module.exports = function (grunt) {
    "use strict";
	var path = require('path'),
        nameTask = path.basename(module.filename, '.js');

	grunt.registerTask(nameTask, ['sass', 'cssmin']);
};