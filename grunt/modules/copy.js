module.exports = {
	main: {
		files: [{
			expand: true,
			src: ['app/data/*.json'],
			dest: 'src/client/data/',
			flatten: true
		}]
	}
};