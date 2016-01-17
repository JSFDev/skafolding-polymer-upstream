module.exports = {
	main: {
		files: [{
			expand: true,
			src: ['components/**/*.json'],
			dest: 'www/data/',
			flatten: true
		}]
	}
};