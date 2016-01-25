module.exports = {
	options: {
		removeComments: true,
		collapseWhitespace: true
	},
	partials: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ["elements/**/*.html"],
			dest: "src/client"
		}]
	}
};