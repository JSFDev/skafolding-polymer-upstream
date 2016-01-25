module.exports = {
	options: {
		keepSpecialComments: 0
	},
	target: {
		files: [{
			expand: true,
			cwd: 'build',
			src: ['*.css', '*.min.css'],
			dest: 'src/client/styles',
			ext: '.min.css'
		}]
	}
};