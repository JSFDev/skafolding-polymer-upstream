module.exports = {
	options: {
		keepSpecialComments: 0
	},
	target: {
		files: [{
			expand: true,
			cwd: 'build',
			src: ['*.css', '*.min.css'],
			dest: 'www/css',
			ext: '.min.css'
		}]
	}
};