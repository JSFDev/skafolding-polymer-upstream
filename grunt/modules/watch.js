module.exports = {
	scripts: {
		files: ['app/**/*.*', 'app/**/*', 'app/**/**/*.*', 'app/**/*/*'],
		tasks: ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify'],
		options: {
			debounceDelay: 10
		}
	}
};