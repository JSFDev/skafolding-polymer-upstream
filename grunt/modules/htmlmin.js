module.exports = {
	options: {
		removeComments: true,
		collapseWhitespace: true
	},
	partials: {
		files: [{
			expand: true,
			cwd: 'components',
			src: ["**/*.html"],
			dest: "www/components/"
		}]
	}
};