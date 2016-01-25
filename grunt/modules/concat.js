module.exports = {
	options: {
		separator: ';'
	},
	dist: {
		src: ['app/js/*.js', 'app/js/**/*.js'],
		dest: 'build/built.js'
	}
};