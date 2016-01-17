module.exports = {
	scripts: {
		files: ['styles/**/*', 'components/**/*'],
		tasks: ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'json-minify'],
		options: {
			debounceDelay: 10
		}
	}
};